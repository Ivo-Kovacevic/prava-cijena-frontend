"use server";

import Link from "next/link";
import Product from "@/ui/Product";
import SeeMore from "@/ui/SeeMore";
import { getStaticCategories, getStaticProducts } from "@/lib/actions";
import Category from "@/ui/Category";
import dummyProductStores from "@/const/dummyProductStores";
import GeneralError from "@/ui/icons/GeneralError";
import StaticProductStore from "@/ui/product/StaticProductStore";

export default async function Page() {
  const products = await getStaticProducts();
  const categories = await getStaticCategories();

  if (products.error || categories.error) {
    return <GeneralError />;
  }

  return (
    <main className="flex flex-col gap-32 py-16">
      <section className="flex h-[400px] items-center gap-5 px-4 md:px-10 xl:h-[520px]">
        <article className="flex w-full flex-col gap-5 xl:w-1/2">
          <h1 className="bg-gradient-to-r from-lime-800 to-lime-600 bg-clip-text text-transparent">
            Pronađi sve cijene
            <br />
            na jednom mjestu
          </h1>
          <h5>
            Naša platforma omogućuje jednostavno praćenje cijena proizvoda iz različitih trgovina,
            pomažući ti da uvijek pronađeš najbolju ponudu.
          </h5>
          <div>
            <Link
              href="/kategorije"
              className="block w-fit rounded-xl bg-gradient-to-r from-lime-800 to-lime-600 px-8 py-4 text-background shadow-md transition hover:brightness-95 focus:outline-foreground"
            >
              Počni pretraživati
            </Link>
          </div>
        </article>
        <div className="hidden w-full flex-col gap-5 xl:flex xl:w-1/2">
          {dummyProductStores.map((store) => (
            <StaticProductStore key={store.id} store={store} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Istaknuti proizvodi</h3>
        <div className="flex gap-5 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <SeeMore href="/kategorije/mlijeko" text="Pogledaj više" />
      </section>

      <section className="flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Glavne kategorije</h3>
        <div className="flex gap-x-5 overflow-x-auto px-4 pb-4 md:px-10">
          {categories.data.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <SeeMore href="/kategorije" text="Pogledaj sve kategorije" />
      </section>
    </main>
  );
}
