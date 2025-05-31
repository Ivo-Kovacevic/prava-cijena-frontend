"use server";

import { tryCatch } from "@/utils/try-catch";
import { StoreLocationType } from "@/@types/api-types";
import { API_URL } from "@/utils/config";
import { cookies } from "next/headers";

export async function getSavedStores() {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  return await tryCatch<StoreLocationType[]>(
    fetch(`${API_URL}/api/saved-stores`, {
      cache: "no-store",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );
}

export async function saveStoreLocation(previousState: unknown, formData: FormData) {
  const storeLocationId = formData.get("storeLocationId") as string;

  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  const response = await tryCatch<StoreLocationType>(
    fetch(`${API_URL}/api/saved-stores/${storeLocationId}`, {
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

export async function removeSavedStore(previousState: unknown, formData: FormData) {
  const storeLocationId = formData.get("storeLocationId") as string;

  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  const response = await tryCatch<Response>(
    fetch(`${API_URL}/api/saved-stores/${storeLocationId}`, {
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
