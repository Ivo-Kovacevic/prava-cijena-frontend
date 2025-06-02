"use client";

import Link from "next/link";
import LogoOnPrimary from "@/ui/icons/LogoOnPrimary";
import { useNotification } from "@/context/notificationContext";

export default function Footer() {
  const { setNotification } = useNotification();

  const handleUnfinishedFeature = () => {
    setNotification(null);
    setTimeout(() => {
      setNotification("Funkcija trenutno nije dostupna");
    }, 0);
  };

  return (
    <footer className="mt-24 grid grid-cols-4 gap-20 bg-primary px-4 py-20 text-background selection:bg-background selection:text-primary md:px-10">
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <div>
          <Link href="/" className="focus:outline-background">
            <LogoOnPrimary className="h-10" />
          </Link>
        </div>
        <p>Pronađi i usporedi cijene namirnica iz više trgovina na jednom mjestu.</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Brzi linkovi</h3>
        <Link className="w-fit hover:underline focus:outline-background" href="/">
          Početna
        </Link>
        <Link className="w-fit hover:underline focus:outline-background" href="/kategorije">
          Kategorije
        </Link>
        <Link
          className="w-fit hover:underline focus:outline-background"
          href="/kosarica"
          prefetch={false}
        >
          Košarica
        </Link>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Informacije</h3>
        <Link className="w-fit hover:underline focus:outline-background" href="/o-nama">
          O nama
        </Link>
        <Link
          className="w-fit hover:underline focus:outline-background"
          href="/politika-privatnosti"
        >
          Politika privatnosti
        </Link>
        <Link className="w-fit hover:underline focus:outline-background" href="/kontakt">
          Kontakt
        </Link>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Aplikacije</h3>
        <span
          role="button"
          tabIndex={0}
          onClick={handleUnfinishedFeature}
          onKeyDown={(e) => e.key === "Enter" && handleUnfinishedFeature()}
          className="cursor-pointer underline-offset-2 hover:underline"
        >
          Preuzmi na Google Play
        </span>
        <span
          role="button"
          tabIndex={0}
          onClick={handleUnfinishedFeature}
          onKeyDown={(e) => e.key === "Enter" && handleUnfinishedFeature()}
          className="cursor-pointer underline-offset-2 hover:underline"
        >
          Preuzmi na Apple Store
        </span>
      </article>
      <article className="col-span-4 text-center">
        <p>© 2025 Prava Cijena. Sva prava pridržana.</p>
      </article>
    </footer>
  );
}
