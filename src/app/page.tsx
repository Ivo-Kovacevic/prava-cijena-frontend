"use server";

import Image from "next/image";
import Link from "next/link";
import { getProducts } from "./actions";
import Product from "@/ui/Product";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col gap-40">
      <section className="flex flex-col items-center gap-5 px-4 md:px-10 xl:flex-row">
        <article className="flex w-full flex-col gap-5 xl:w-1/2">
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
        <article className="w-full xl:w-1/2 hidden md:block">
          <Image
            src="/hero-image.png"
            width={814}
            height={434}
            alt={""}
            className="w-full"
          />
        </article>
      </section>

      <section className="flex flex-col space-y-4">
        <h3 className="px-4 md:px-10">Istaknuti proizvodi</h3>
        <div className="flex pb-4 gap-5 overflow-x-auto px-4 md:grid md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="px-4 md:px-10">Glavne kategorije</h3>
      </section>
    </main>
  );
}
