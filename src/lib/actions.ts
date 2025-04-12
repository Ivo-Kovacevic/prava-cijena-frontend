"use server";

import { CategoryType, ProductType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";
import { tryCatch } from "@/utils/try-catch";

export async function getCategory(category: string) {
  const result = await tryCatch<CategoryType>(
    fetch(`${API_URL}/api/categories/${category}`).then((res) => res.json()),
  )

  return result;
}

export async function getCategories() {
  const result = await tryCatch<CategoryType[]>(
    fetch(`${API_URL}/api/categories/`).then((res) => res.json()),
  );

  return result;
}

export async function getProducts(
  category: string = "gazirana-pica",
  limit: number = 80,
  page: number = 1,
) {
  const result = await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/categories/${category}/products?page=${page}&limit=${limit}`).then((res) =>
      res.json(),
    ),
  );

  return result;
}
