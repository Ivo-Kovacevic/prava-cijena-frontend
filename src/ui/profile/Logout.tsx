"use client";

import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { useUser } from "@/context/userContext";

export function Logout() {
  const { user, logout } = useAuth();
  const { setSavedProducts, setSavedStores } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setSavedProducts([]);
      setSavedStores([]);
    }
  }, [user, setSavedProducts, setSavedStores]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await logout();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        className={`m-auto mt-10 flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30 ${isLoading ? "hover:cursor-wait" : ""}`}
      >
        {isLoading ? <div className="loader" /> : "Odjavi se"}
      </button>
    </form>
  );
}
