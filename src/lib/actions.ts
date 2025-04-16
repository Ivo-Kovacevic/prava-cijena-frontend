"use server";

import { CategoryType, ProductType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";
import { tryCatch } from "@/utils/try-catch";

export async function getCategory(category: string) {
  return await tryCatch<CategoryType>(
    fetch(`${API_URL}/api/categories/${category}`, { cache: "no-store" }).then((res) => res.json()),
  );
}

export async function getStaticCategories() {
  return await tryCatch<CategoryType[]>(
    fetch(`${API_URL}/api/categories/`).then((res) => res.json()),
  );
}

export async function getStaticProducts() {
  return await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/categories/mlijeko/products?limit=10`).then((res) => res.json()),
  );
}

export async function getProducts(
  category: string = "gazirana-pica",
  limit: number = 80,
  page: number = 1,
) {
  return await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/categories/${category}/products?page=${page}&limit=${limit}`, {
      cache: "no-store",
    }).then((res) => res.json()),
  );
}

export async function getProduct(productSlug: string) {
  return await tryCatch<ProductType>(
    fetch(`${API_URL}/api/products/${productSlug}`, { cache: "no-store" }).then((res) =>
      res.json(),
    ),
  );
}

export async function searchProducts(searchTerm: string) {
  return await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/products/search?searchTerm=${searchTerm}`, { cache: "no-store" }).then(
      (res) => res.json(),
    ),
  );
}
