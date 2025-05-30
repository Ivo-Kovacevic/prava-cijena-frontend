"use server";

import {
  CategoryType,
  Pagination,
  ProductType,
  StoreLocationType,
  StoreType,
  UserType,
} from "@/@types/api-types";
import { API_URL } from "@/utils/config";
import { tryCatch } from "@/utils/try-catch";
import { cookies } from "next/headers";

export async function getStaticCategories() {
  return await tryCatch<CategoryType[]>(
    fetch(`${API_URL}/api/categories/`).then((res) => res.json()),
  );
}

export async function getStaticProducts() {
  return await tryCatch<Pagination>(
    fetch(`${API_URL}/api/categories/mlijeko/products?limit=10`).then((res) => res.json()),
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

  return await tryCatch<Pagination>(
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

export async function getProductStores(productSlug: string) {
  return await tryCatch<StoreType[]>(
    fetch(`${API_URL}/api/products/${productSlug}/product-stores`, { cache: "no-store" }).then(
      (res) => res.json(),
    ),
  );
}

export async function getStoreLocations(productSlug: string, storeSlug: string) {
  return await tryCatch<StoreLocationType[]>(
    fetch(`${API_URL}/api/store-location/${productSlug}/${storeSlug}`, { cache: "no-store" }).then(
      (res) => res.json(),
    ),
  );
}

export async function searchProducts(searchTerm: string, page: number = 1, limit: number = 5) {
  return await tryCatch<ProductType[]>(
    fetch(`${API_URL}/api/products/search?searchTerm=${searchTerm}&page=${page}&limit=${limit}`, {
      cache: "no-store",
    }).then((res) => res.json()),
  );
}

export async function login(email: string, password: string) {
  const response = await tryCatch<Response>(
    fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify({ email, password }),
    }),
  );

  console.dir(response);

  if (response.error) {
    return response.error.message;
  }

  if (!response.data.ok) {
    return "Email ili lozinka je netočna";
  }

  const user: UserType = await response.data.json();

  return user;
}

export async function logout() {
  return await tryCatch(
    fetch(`${API_URL}/api/users/logout`, {
      method: "POST",
    }).then((res) => res.json()),
  );
}

export async function checkUser() {
  const cookieStore = await cookies();
  const tokenValue = cookieStore.get("jwtToken")?.value;

  return await tryCatch<UserType>(
    fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      headers: {
        ...(tokenValue && { Cookie: `jwtToken=${tokenValue}` }),
      },
    }).then((res) => res.json()),
  );
}
