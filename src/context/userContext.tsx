"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProductType, StoreLocationType } from "@/@types/api-types";
import { tryCatch } from "@/utils/try-catch";
import { API_URL } from "@/utils/config";
import { useAuth } from "@/context/authContext";

interface UserContextType {
  savedProducts: ProductType[];
  setSavedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  savedStores: StoreLocationType[];
  setSavedStores: React.Dispatch<React.SetStateAction<StoreLocationType[]>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  const [savedProducts, setSavedProducts] = useState<ProductType[]>([]);
  const [savedStores, setSavedStores] = useState<StoreLocationType[]>([]);

  const getSavedProducts = async () => {
    const res = await tryCatch<ProductType[]>(
      fetch(`${API_URL}/api/saved-products`, {
        cache: "no-store",
        credentials: "include",
      }).then((res) => res.json()),
    );

    if (res.error) {
      setSavedProducts([]);
      return;
    }

    setSavedProducts(res.data);
  };

  useEffect(() => {
    if (user) {
      getSavedProducts();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        savedProducts,
        setSavedProducts,
        savedStores,
        setSavedStores,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
