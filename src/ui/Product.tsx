"use client";

import { ProductType } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_URL } from "@/utils/config";
import { tryCatch } from "@/utils/try-catch";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import { getTrgovinaForm } from "@/lib/helpers";

export default function Product({ product }: { product: ProductType }) {
  const { savedProducts, setSavedProducts } = useUser();
  const isSaved = savedProducts.some((sp) => sp.id === product.id);

  const productLink = `/proizvod/${product.slug}`;
  const router = useRouter();

  async function toggleSavedProduct() {
    const method = isSaved ? "DELETE" : "POST";

    const res = await tryCatch(
      fetch(`${API_URL}/api/saved-products/${product.id}`, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }),
    );

    if (res.error) {
      return;
    }

    if (res.data.status === 204) {
      setSavedProducts((prev) => prev.filter((p) => p.id !== product.id));
      return;
    }

    if (res.data.ok) {
      const newProduct: ProductType = await res.data.json();
      if (newProduct) {
        setSavedProducts((previousState) => [...previousState, newProduct]);
      }
    }
  }

  return (
    <article className="flex h-[390px] min-w-80 flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4 sm:min-w-0">
      <div className="relative">
        <FontAwesomeIcon
          className={`absolute right-0 top-0 cursor-pointer text-3xl ${isSaved ? "text-primary" : "text-caption"}`}
          icon={isSaved ? faHeartSolid : faHeartOutline}
          onClick={toggleSavedProduct}
        />
      </div>
      <div className="flex h-[200px] justify-center">
        <Link href={productLink} prefetch={false} onMouseEnter={() => router.prefetch(productLink)}>
          <Image
            src={
              product.imageUrl
                ? product.imageUrl
                : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
            }
            alt={`Slika proizvoda ${product.name}`}
            width={200}
            height={200}
            className="aspect-square h-[200px] object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
          />
        </Link>
      </div>

      <Link href={productLink} prefetch={false} onMouseEnter={() => router.prefetch(productLink)}>
        <h5 className="line-clamp-2 transition hover:text-primary">{product.name}</h5>
      </Link>

      <h6 className="text-caption">
        {product.numberOfStores} {getTrgovinaForm(product.numberOfStores)}
      </h6>

      <div className="mt-auto flex items-center">
        <h2 className="m-auto text-primary">{product.lowestPrice} €</h2>

        <Link
          href={productLink}
          onMouseEnter={() => router.prefetch(productLink)}
          prefetch={false}
          className="mr-0 h-[50px] w-[125px] rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
        >
          <h6>Pregledaj</h6>
        </Link>
      </div>
    </article>
  );
}
