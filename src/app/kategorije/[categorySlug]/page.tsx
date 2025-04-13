"use server";

import { getCategory, getProducts } from "@/lib/actions";
import Filters from "@/ui/category/Filters";
import Subcategories from "@/ui/category/Subcategories";
import Filter from "@/ui/icons/Filter";
import Product from "@/ui/Product";

type Params = {
  categorySlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { categorySlug } = await params;
  const products = await getProducts(categorySlug);
  const category = await getCategory(categorySlug);

  if (category.error || products.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }
  console.dir(category.data.labels);

  const numOfProducts = products.data.length;

  return (
    <main className="grid gap-5 px-4 pb-4 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <section className="flex flex-col gap-5 lg:col-span-1">
        <div className="flex items-center justify-between">
          <h3>Filtriranje</h3>
          <Filter className="h-7" />
        </div>

        <h4>{category.data.name}</h4>

        <div className="hidden lg:block">
          {category.data.labels.length > 0 ? (
            <Filters labels={category.data.labels} />
          ) : (
            <Subcategories subcategories={category.data.subcategories} />
          )}
        </div>
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
