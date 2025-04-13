"use server";

import Image from "next/image";
import Link from "next/link";
import Product from "@/ui/Product";
import SeeMore from "@/ui/SeeMore";
import { getCategories, getStaticProducts } from "@/lib/actions";
import Category from "@/ui/Category";

export default async function Page() {
  const products = await getStaticProducts();
  const categories =
    await getCategories();

  if (products.error || categories.error) {
    return <h2 className="text-center mt-14">Greška pri dohvaćanju podataka.</h2>;
  }


  return (
    <main className="flex flex-col gap-40 py-32">
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
        <article className="hidden w-full xl:block xl:w-1/2">
          <Image
            src="/hero-image.png"
            width={814}
            height={434}
            alt={""}
            className="w-full"
          />
        </article>
      </section>

      <section className="flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Istaknuti proizvodi</h3>
        <div
          className="flex gap-5 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <SeeMore text="Pogledaj više" />
      </section>

      <section className="flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Glavne kategorije</h3>
        <div className="flex gap-x-5 overflow-x-auto px-4 pb-4 md:px-10">
          {categories.data.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <SeeMore text="Pogledaj sve kategorije" />
      </section>
    </main>
  );
}
