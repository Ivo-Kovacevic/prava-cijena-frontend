import Link from "next/link";
import LogoOnPrimary from "@/ui/icons/LogoOnPrimary";

export default function Footer() {
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
        <p>Košarica</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Informacije</h3>
        <p>O nama</p>
        <p>Česta pitanja</p>
        <p>Uvjeti korištenja</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Aplikacije</h3>
        <p>Preuzmi na Google Play</p>
        <p>Preuzmi na Apple Store</p>
      </article>
      <article className="col-span-4 text-center">
        <p>© 2025 Prava Cijena. Sva prava pridržana.</p>
      </article>
    </footer>
  );
}
