"use client";

import { useAuth } from "@/context/authContext";
import { useEffect } from "react";
import { useUser } from "@/context/userContext";

export function Logout() {
  const { user, logout } = useAuth();
  const { setSavedProducts, setSavedStores } = useUser();

  useEffect(() => {
    if (!user) {
      setSavedProducts([]);
      setSavedStores([]);
    }
  }, [user, setSavedProducts, setSavedStores]);

  return (
    <h5 onClick={logout} className="cursor-pointer hover:text-red-900">
      Odjavi se
    </h5>
  );
}
