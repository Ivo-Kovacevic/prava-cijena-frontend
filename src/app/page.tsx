"use server";

import Product from "@/ui/Product";
import SeeMore from "@/ui/SeeMore";
import { getStaticCategories, getStaticProducts } from "@/lib/actions";
import Category from "@/ui/Category";
import GeneralError from "@/ui/icons/GeneralError";
import { categoryOrder } from "@/lib/helpers";
import HeroSection from "@/ui/hero-section/HeroSection";

export default async function Page() {
  const pagination = await getStaticProducts();
  const categories = await getStaticCategories();

  if (pagination.error || categories.error) {
    return <GeneralError />;
  }

  const sortedCategories = [...categories.data].sort((a, b) => {
    return categoryOrder.indexOf(a.name) - categoryOrder.indexOf(b.name);
  });

  return (
    <main className="flex flex-col gap-32 py-16">
      <HeroSection />

      <section className="scrollbar-custom flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Istaknuti proizvodi</h3>
        <div className="flex gap-5 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {pagination.data.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <SeeMore href="/kategorije/mlijeko" text="Pogledaj više" />
      </section>

      <section className="scrollbar-custom flex flex-col gap-y-5">
        <h3 className="px-4 md:px-10">Glavne kategorije</h3>
        <div className="flex gap-x-5 overflow-x-auto px-4 pb-4 md:px-10">
          {sortedCategories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <SeeMore href="/kategorije" text="Pogledaj sve kategorije" />
      </section>
    </main>
  );
}
