"use server";

import { cookies } from "next/headers";
import { tryCatch } from "@/utils/try-catch";
import { ProductType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";

export async function getSavedProducts() {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  return await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/saved-products`, {
      cache: "no-store",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );
}

export async function saveFavoriteProduct(previousState: unknown, formData: FormData) {
  const productId = formData.get("productId") as string;

  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  const response = await tryCatch<ProductType>(
    fetch(`${API_URL}/api/saved-products/${productId}`, {
      method: "POST",
      cache: "no-store",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );

  if (response.error) {
    return { status: 500 };
  }

  return response.data;
}

export async function removeFavoriteProduct(previousState: unknown, formData: FormData) {
  const productId = formData.get("productId") as string;

  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  const response = await tryCatch<Response>(
    fetch(`${API_URL}/api/saved-products/${productId}`, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }),
  );

  if (response.error) {
    return { status: 500 };
  }

  return response.data.status;
}
