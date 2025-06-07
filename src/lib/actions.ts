"use server";

import {
  CategoryType,
  PaginationType,
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
