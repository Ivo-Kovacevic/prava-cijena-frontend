"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useNotification } from "@/context/notificationContext";
import { useRouter } from "next/navigation";
import { register } from "@/lib/actions";

export default function Page() {
  const { setNotification } = useNotification();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const router = useRouter();

  const [data, formAction, isPending] = useActionState(register, undefined);

  useEffect(() => {
    if (data && data.result) {
      setNotification("Uspješna registracija");
      setUser(data.result);

      router.push("/");
    }
  }, [data, setNotification, setUser, router]);

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <h3>Registriraj se</h3>
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
            minLength={6}
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <h5 className="text-caption">Ponovite lozinku</h5>
          <input
            type="password"
            placeholder="Ponovite lozinku"
            name="repeated-password"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
            minLength={6}
            defaultValue={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
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
        {data?.error && (
          <div className="absolute text-red-800 transition-transform duration-300">
            {data.error.split(",").map((msg: string, i: number) => (
              <p key={i}>{msg.trim()}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
