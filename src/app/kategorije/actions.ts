"use server";

import { CategoryType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories/`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const products: CategoryType[] = data;

  return products;
}
