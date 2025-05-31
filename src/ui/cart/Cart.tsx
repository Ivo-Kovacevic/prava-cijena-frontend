"use client";

import { useUser } from "@/context/userContext";
import RemoveFromCart from "@/ui/cart/RemoveFromCart";
import AddToCart from "@/ui/cart/AddToCart";

export default function CartButton({ productId }: { productId: string }) {
  const { cart } = useUser();
  const productInCart = cart.some((p) => p.id === productId);

  return productInCart ? (
    <RemoveFromCart productId={productId} />
  ) : (
    <AddToCart productId={productId} />
  );
}
