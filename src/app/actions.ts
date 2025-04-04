"use server";

import { ProductType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";

export async function getProducts() {
    const res = await fetch(
      `${API_URL}/api/categories/mlijeko/products?limit=10`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    
    const data = await res.json();
    const products: ProductType[] = data["$values"];

    return products;
}
