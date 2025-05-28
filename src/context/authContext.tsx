// context/AuthContext.tsx
"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserType } from "@/@types/api-types";
import { tryCatch } from "@/utils/try-catch";
import { API_URL } from "@/utils/config";

interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<UserType | string>;
  register: (email: string, password: string) => Promise<UserType | string>;
  logout: () => Promise<void>;
  isLoading: boolean;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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

  const register = async (email: string, password: string) => {
    const res = await tryCatch<Response>(
      fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }),
    );

    if (res.error) {
      return "Nešto je pošlo po krivu :(";
    }

    if (!res.data.ok) {
      return "Lozinka treba imati 6 karaktera.";
    }

    const json = await res.data.json();
    setUser(json);
    router.push("/");
    return json;
  };

  const login = async (email: string, password: string) => {
    const res = await tryCatch<Response>(
      fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }),
    );

    if (res.error) {
      return "Nešto je pošlo po krivu :(";
    }

    if (!res.data.ok) {
      return "Email ili lozinka je netočna";
    }

    const user: UserType = await res.data.json();
    setUser(user);
    router.push("/");
    return user;
  };

  const logout = async () => {
    await tryCatch(
      fetch(`${API_URL}/api/users/logout`, {
        method: "POST",
        credentials: "include",
      }).then((res) => res.json()),
    );

    setUser(null);
    router.refresh();
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, register, logout, isLoading, checkAuthStatus }}
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
