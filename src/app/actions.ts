"use server";

import { API_URL } from "@/utils/config";

export async function getProducts() {
  try {
    const res = await fetch(
      `${API_URL}/api/categories/mlijeko/products?limit=10`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    
    const data = await res.json();
    const products = data["$values"];
    console.log(products);

    return products;
  } catch (error) {
    console.log(error);
  }
}
