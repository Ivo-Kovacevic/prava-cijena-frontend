"use server";

import { Product } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "./actions";

export default async function Home() {
  const products: Product[] = await getProducts();

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
        <div className="grid grid-cols-5 gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4"
            >
              <div className="flex justify-center">
                <Image
                  src={product.imageUrl}
                  alt={"Slika proizvoda"}
                  width={175}
                  height={200}
                />
              </div>
              <h5>{product.name}</h5>
              <h6 className="text-caption">7 trgovina</h6>
              <div className="mt-auto flex items-center">
                <h2 className="m-auto text-primary">1,02 €</h2>

                <Link
                  href="#"
                  className="mr-0 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
                >
                  <h6>Pregledaj</h6>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3>Glavne kategorije</h3>
      </section>
    </main>
  );
}
