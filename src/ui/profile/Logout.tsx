"use client";

import { useAuth } from "@/context/authContext";
import { FormEvent, useTransition } from "react";
import { useUser } from "@/context/userContext";
import { useNotification } from "@/context/notificationContext";
import { logout } from "@/lib/actions";

export function Logout() {
  const { setNotification } = useNotification();
  const { setUser } = useAuth();
  const [isPending, startTransition] = useTransition();
  const { setSavedProducts, setSavedStores, setCart } = useUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setUser(null);
    setSavedProducts([]);
    setSavedStores([]);
    setCart([]);
    setTimeout(() => {
      setNotification("Uspješna odjava");
    }, 0);

    startTransition(async () => {
      await logout();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        className={`m-auto mt-10 flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30 ${isPending ? "hover:cursor-wait" : ""}`}
      >
        {isPending ? <div className="loader" /> : "Odjavi se"}
      </button>
    </form>
  );
}
