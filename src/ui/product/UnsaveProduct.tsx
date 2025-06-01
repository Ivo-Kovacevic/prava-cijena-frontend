"use client";

import { useActionState, useEffect } from "react";
import { useUser } from "@/context/userContext";
import Heart from "@/ui/icons/Heart";
import { removeFavoriteProduct } from "@/lib/savedProductsActions";

export default function UnsaveProduct({ productId }: { productId: string }) {
  const { setSavedProducts } = useUser();
  const [data, formAction, isPending] = useActionState(removeFavoriteProduct, undefined);

  useEffect(() => {
    if (data) {
      if (data === 204) {
        setSavedProducts((prev) => prev.filter((product) => product.id !== productId));
      }
    }
  }, [data, productId]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <button
        disabled={isPending}
        className={`flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 ${isPending ? "hover:cursor-wait" : ""}`}
      >
        <Heart
          className={`absolute right-0 top-0 h-8 ${isPending ? "animate-pulse fill-caption text-caption" : "fill-primary text-primary"}`}
        />
      </button>
    </form>
  );
}
