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
