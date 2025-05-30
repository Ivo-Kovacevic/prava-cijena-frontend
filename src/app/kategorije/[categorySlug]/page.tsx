"use server";

import { getProducts } from "@/lib/actions";
import Product from "@/ui/Product";
import GeneralError from "@/ui/icons/GeneralError";
import Pagination from "@/ui/Pagination";
import { API_URL } from "@/utils/config";

type Params = {
  categorySlug: string;
};

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/categories`);
  const categories = await res.json();

  return categories.map((cat: { slug: string }) => ({
    categorySlug: cat.slug,
  }));
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<{ page?: string; limit?: string }>;
}) {
  const { categorySlug } = await params;

  const resolvedParams = await searchParams;
  const page = parseInt(resolvedParams.page ?? "1", 10);
  const limit = parseInt(resolvedParams.limit ?? "60", 10);

  const pagination = await getProducts(categorySlug, page, limit);

  if (pagination.error) {
    return <GeneralError />;
  }

  const numOfProducts = pagination.data.products.length;

  return (
    <>
      <h3 className="col-span-full">
        {numOfProducts} {numOfProducts % 10 === 1 ? "proizvod" : "proizvoda"}
      </h3>

      {pagination.data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Pagination
        currentPage={pagination.data.currentPage}
        totalPages={pagination.data.totalPages}
      />
    </>
  );
}
