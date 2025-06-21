"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { UserType } from "@/@types/api-types";
import { tryCatch } from "@/utils/try-catch";
import { API_URL } from "@/utils/config";

interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    const res = await tryCatch<UserType>(
      fetch(`${API_URL}/api/users/me`, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json()),
    );
    setIsLoading(false);

    if (res.error) {
      setUser(null);
      return;
    }

    setUser(res.data);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        isLoading,
        checkAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
