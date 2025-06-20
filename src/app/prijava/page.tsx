"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { useNotification } from "@/context/notificationContext";
import { login } from "@/lib/actions";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { setNotification } = useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();

  const [data, formAction, isPending] = useActionState(login, undefined);

  useEffect(() => {
    if (data && data.result) {
      setNotification("Uspješna prijava");
      setUser(data.result);

      router.push("/profil");
    }
  }, [data, setNotification, setUser, router]);

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <h3>Prijavi se</h3>

      <form action={formAction} className="flex w-full flex-col gap-5">
        <div>
          <h5 className="text-caption">Email</h5>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
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
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          disabled={isPending}
          className="flex h-14 items-center justify-center rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-90 focus:outline-foreground"
        >
          {isPending ? <div className="loader" /> : "Prijavi se"}
        </button>
      </form>

      <div className="flex gap-2">
        <span className="text-caption">Nemate račun?</span>
        <Link
          href="/registracija"
          prefetch={false}
          className="text-caption underline transition hover:text-foreground"
        >
          Registrirajte se
        </Link>
      </div>

      <div className="relative -z-10 flex justify-center">
        {data?.error && (
          <div className="absolute text-red-800 transition-transform duration-300">
            {data.error}
          </div>
        )}
      </div>
    </div>
  );
}
