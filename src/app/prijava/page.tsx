"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function Page() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    const result = await login(email, password);

    if (typeof result === "string") {
      setError(result);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 5000);

      return;
    }

    router.push("/");
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <h3>Prijavi se</h3>

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
            required
          />
        </div>

        <button className="z-10 rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-90 focus:outline-foreground">
          Prijavi se
        </button>

        <div className="relative flex justify-center">
          <div
            className={`absolute text-red-800 transition-transform duration-300 ${
              showError ? "-translate-y-4" : "-translate-y-12"
            }`}
          >
            {error}
          </div>
        </div>
      </form>

      <div className="flex gap-2">
        <span className="text-caption">Nemate račun?</span>
        <Link
          href="/registracija"
          className="text-caption underline transition hover:text-foreground"
        >
          Registrirajte se
        </Link>
      </div>
    </div>
  );
}
