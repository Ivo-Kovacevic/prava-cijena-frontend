"use server";

import {
  CategoryType,
  PaginationType,
  ProductType,
  StoreLocationType,
  StoreType,
  UserType,
} from "@/@types/api-types";
import { API_URL, IS_PRODUCTION } from "@/utils/config";
import { tryCatch } from "@/utils/try-catch";
import { cookies } from "next/headers";
import { getSetCookies } from "@/lib/helpers";
import { redirect } from "next/navigation";

export async function getStaticCategories() {
  return await tryCatch<CategoryType[]>(
    fetch(`${API_URL}/api/categories/`).then((res) => res.json()),
  );
}

export async function getStaticCategoryProducts(category: string, limit: number) {
  return await tryCatch<PaginationType>(
    fetch(`${API_URL}/api/categories/${category}/products?limit=${limit}`).then((res) =>
      res.json(),
    ),
  );
}

export async function getStaticSearchedProducts(searchTerm: string, limit: number) {
  return await tryCatch<ProductType[]>(
    fetch(
      `${API_URL}/api/products/search?searchTerm=${encodeURIComponent(
        searchTerm,
      )}&page=1&limit=${limit}`,
    ).then((res) => res.json()),
  );
}

export async function getCategory(category: string) {
  return await tryCatch<CategoryType>(
    fetch(`${API_URL}/api/categories/${category}`, { next: { revalidate: false } }).then((res) =>
      res.json(),
    ),
  );
}

export async function getProducts(
  category: string = "gazirana-pica",
  page: number = 1,
  limit: number = 60,
) {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  return await tryCatch<PaginationType>(
    fetch(`${API_URL}/api/categories/${category}/products?page=${page}&limit=${limit}`, {
      ...(page === 1
        ? { next: { revalidate: false } } // Cache only page 1
        : { cache: "no-store" }), // Don't cache other pages
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );
}

export async function getProduct(productSlug: string) {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  return await tryCatch<ProductType>(
    fetch(`${API_URL}/api/products/${productSlug}`, {
      cache: "no-store",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );
}

export async function getStores() {
  return await tryCatch<StoreType[]>(
    fetch(`${API_URL}/api/stores`, {
      cache: "no-store",
    }).then((res) => res.json()),
  );
}

export async function getStoreLocations(storeId: string) {
  return await tryCatch<StoreLocationType[]>(
    fetch(`${API_URL}/api/store-location/${storeId}`, {
      cache: "no-store",
    }).then((res) => res.json()),
  );
}

export async function getProductStores(productSlug: string) {
  return await tryCatch<StoreType[]>(
    fetch(`${API_URL}/api/products/${productSlug}/product-stores`, { cache: "no-store" }).then(
      (res) => res.json(),
    ),
  );
}

export async function getProductLocations(productSlug: string, storeSlug: string) {
  return await tryCatch<StoreLocationType[]>(
    fetch(`${API_URL}/api/store-location/${productSlug}/${storeSlug}`, { cache: "no-store" }).then(
      (res) => res.json(),
    ),
  );
}

export async function searchProducts(searchTerm: string, page: number = 1, limit: number = 5) {
  return await tryCatch<ProductType[]>(
    fetch(
      `${API_URL}/api/products/search?searchTerm=${encodeURIComponent(
        searchTerm,
      )}&page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      },
    ).then((res) => res.json()),
  );
}

export async function register(previousState: unknown, formData: FormData) {
  const email = formData.get("email")?.toString() as string;
  const password = formData.get("password")?.toString() as string;
  const repeatedPassword = formData.get("repeated-password")?.toString() as string;

  if (password !== repeatedPassword) {
    return { result: null, error: "Lozinke nisu iste." };
  }

  const response = await tryCatch<Response>(
    fetch(`${API_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ email, password }),
    }),
  );

  if (response.error) {
    return { result: null, error: "Nešto je pošlo po krivu :(" };
  }

  const nextCookies = await cookies();

  const setCookies = getSetCookies(response.data.headers.getSetCookie());
  setCookies.forEach((cookie) => {
    nextCookies.set(cookie.cookieName, cookie.cookieValue, cookie.options);
  });

  if (!response.data.ok) {
    const errorResponse = await response.data.json();
    return { result: null, error: errorResponse?.error || "Neuspješna registracija." };
  }

  const user: UserType = await response.data.json();
  return { result: user, error: null };
}

export async function login(previousState: unknown, formData: FormData) {
  const email = formData.get("email")?.toString() as string;
  const password = formData.get("password")?.toString() as string;

  const response = await tryCatch<Response>(
    fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ email, password }),
    }),
  );

  if (response.error) {
    return { result: null, error: "Nešto je pošlo po krivu :(" };
  }

  const nextCookies = await cookies();

  const setCookies = getSetCookies(response.data.headers.getSetCookie());
  setCookies.forEach((cookie) => {
    nextCookies.set(cookie.cookieName, cookie.cookieValue, cookie.options);
  });

  if (!response.data.ok) {
    const errorResponse = await response.data.json();
    return { result: null, error: errorResponse?.error || "Neuspješna prijava." };
  }

  const user: UserType = await response.data.json();
  return { result: user, error: null };
}

export async function logout() {
  const nextCookies = await cookies();
  nextCookies.delete({ name: "jwtToken", domain: IS_PRODUCTION ? ".pravacijena.eu" : undefined });

  redirect("/");
}

export async function checkUser() {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  const response = await fetch(`${API_URL}/api/users/me`, {
    method: "GET",
    headers: {
      ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
    },
  });

  if (response.status === 401) {
    return { error: "Unauthorized" };
  }

  if (!response.ok) {
    return { error: "Server error while fetching user info" };
  }

  const data = await response.json();
  return { data };
}
