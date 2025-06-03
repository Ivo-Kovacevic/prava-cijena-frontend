"use client";

import { useUser } from "@/context/userContext";
import { getProizvodForm } from "@/lib/helpers";

export default function CartItems() {
  const { cart } = useUser();

  return (
    <h4>
      {cart.length} {getProizvodForm(cart.length)} u košarici
    </h4>
  );
}
