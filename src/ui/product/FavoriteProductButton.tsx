"use client";

import { useUser } from "@/context/userContext";
import SaveProduct from "@/ui/product/SaveProduct";
import UnsaveProduct from "@/ui/product/UnsaveProduct";

export default function FavoriteProductButton({ productId }: { productId: string }) {
  const { savedProducts } = useUser();
  const savedProduct = savedProducts.some((p) => p.id === productId);

  return (
    <div className="absolute right-0 top-0">
      {!savedProduct ? (
        <SaveProduct productId={productId} />
      ) : (
        <UnsaveProduct productId={productId} />
      )}
    </div>
  );
}
