"use client";

import { useActionState, useEffect } from "react";
import { useUser } from "@/context/userContext";
import Heart from "@/ui/icons/Heart";
import { saveFavoriteProduct } from "@/lib/savedProductsActions";

export default function SaveProduct({ productId }: { productId: string }) {
  const { setSavedProducts } = useUser();
  const [data, formAction, isPending] = useActionState(saveFavoriteProduct, undefined);

  useEffect(() => {
    if (data && typeof data === "object" && "id" in data) {
      setSavedProducts((previousState) => [...previousState, data]);
    }
  }, [data, setSavedProducts]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <button
        disabled={isPending}
        className={`flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 ${isPending ? "hover:cursor-wait" : ""}`}
      >
        <Heart
          className={`absolute right-0 top-0 h-8 ${isPending ? "animate-pulse fill-caption text-caption" : "fill-none text-caption"}`}
        />
      </button>
    </form>
  );
}
