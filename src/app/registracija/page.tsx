"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/authContext";

export default function Page() {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const confirmedPassword = formData.get("confirm-password")?.toString() || "";

    if (password !== confirmedPassword) {
      setError("Lozinke nisu iste");
      return;
    }

    try {
      setIsLoading(true);
      const result = await register(email, password);

      if (typeof result === "string") {
        setError(result);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <h3>Registriraj se</h3>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div>
          <h5 className="text-caption">Email</h5>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
            required
          />
        </div>

        <div>
          <h5 className="text-caption">Lozinka</h5>
          <input
            type="password"
            placeholder="Lozinka"
            name="password"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
            minLength={6}
            required
          />
        </div>

        <div>
          <h5 className="text-caption">Ponovite lozinku</h5>
          <input
            type="password"
            placeholder="Lozinka"
            name="confirm-password"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
            minLength={6}
            required
          />
        </div>

        <button
          disabled={isLoading}
          className="flex h-14 items-center justify-center rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-90 focus:outline-foreground"
        >
          {isLoading ? <div className="loader" /> : "Prijavi se"}
        </button>
      </form>

      <div className="flex gap-2">
        <span className="text-caption">Imate račun?</span>
        <Link
          href="/prijava"
          prefetch={false}
          className="text-caption underline transition hover:text-foreground"
        >
          Prijavite se
        </Link>
      </div>

      <div className="relative -z-10 flex justify-center">
        <div className="absolute text-red-800 transition-transform duration-300">
          {error?.split(",").map((msg, i) => <p key={i}>{msg.trim()}</p>)}
        </div>
      </div>
    </div>
  );
}
