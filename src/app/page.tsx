import { API_URL } from "@/utils/config";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${API_URL}/api/categories/mlijeko/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const products = await res.json();

  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col gap-40 px-10">
      <section className="flex items-center">
        <article className="flex w-1/2 flex-col gap-5">
          <h1 className="bg-gradient-to-r from-lime-800 to-lime-600 bg-clip-text text-transparent">
            Pregled cijena svih proizvoda, <br />
            iz svih trgovina, <br />
            na jednom mjestu
          </h1>
          <h5>
            Naša platforma omogućuje jednostavno praćenje cijena proizvoda iz
            različitih trgovina, pomažući ti da uvijek pronađeš najbolju ponudu.
          </h5>
          <div>
            <Link
              href="#"
              className="block w-fit rounded-xl bg-gradient-to-r from-lime-800 to-lime-600 px-8 py-4 text-background shadow-md"
            >
              Počni pretraživati
            </Link>
          </div>
        </article>
        <article className="m-auto">
          <Image src="/hero-image.png" width={814} height={434} alt={""} />
        </article>
      </section>

      <section>
        <h3>Istaknuti proizvodi</h3>
      </section>

      <section>
        <h3>Glavne kategorije</h3>
      </section>
    </main>
  );
}
