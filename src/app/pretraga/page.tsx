"use server";

import { searchProducts } from "@/lib/actions";
import Filter from "@/ui/icons/Filter";
import Product from "@/ui/Product";
import GeneralError from "@/ui/icons/GeneralError";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedParams = await searchParams;
  const searchTerm = resolvedParams["izraz"];

  const products = await searchProducts(searchTerm, 1, 80);

  if (products.error) {
    return <GeneralError />;
  }

  const numOfProducts = products.data.length;

  return (
    <main className="grid gap-5 px-4 pb-4 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <section className="flex flex-col gap-5 lg:col-span-1">
        <div className="flex items-center justify-between">
          <h3>Pretraga</h3>
          <Filter className="h-7" />
        </div>

        <h4>{searchTerm}</h4>
      </section>

      <section className="flex flex-col gap-5 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        <h3>
          {numOfProducts} {numOfProducts % 10 === 1 ? "proizvod" : "proizvoda"}
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
