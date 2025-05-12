import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto grid grid-cols-4 gap-10 bg-primary px-4 py-20 text-background selection:bg-background selection:text-primary md:px-10">
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Prava Cijena</h3>
        <p>Pronađi i usporedi cijene namirnica iz više trgovina na jednom mjestu.</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Brzi linkovi</h3>
        <Link href="/">Početna</Link>
        <Link href="/kategorije">Kategorije</Link>
        <p>Košarica</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Informacije</h3>
        <p>O name</p>
        <p>Česta pitanja</p>
        <p>Uvjeti korištenja</p>
      </article>
      <article className="col-span-4 flex flex-col gap-4 md:col-span-2 xl:col-span-1">
        <h3>Aplikacije</h3>
        <p>Preuzmi na Google Play</p>
        <p>Preuzmi na Apple Store</p>
      </article>
      <article className="col-span-4 text-center">
        <p>© 2025 PravaCijena. Sva prava pridržana.</p>
      </article>
    </footer>
  );
}
