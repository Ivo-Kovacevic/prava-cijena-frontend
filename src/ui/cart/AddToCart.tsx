"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useActionState, useEffect } from "react";
import { saveProductToCart } from "@/lib/cartActions";
import { useUser } from "@/context/userContext";

export default function AddToCart({ productId }: { productId: string }) {
  const { setCart } = useUser();
  const [data, formAction, isPending] = useActionState(saveProductToCart, undefined);

  useEffect(() => {
    if (data && typeof data === "object" && "id" in data) {
      setCart((previousState) => [...previousState, data]);
    }
  }, [data, setCart]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <button
        disabled={isPending}
        className={`m-auto flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30 ${isPending ? "hover:cursor-wait" : ""}`}
      >
        {isPending ? (
          <div className="loader text-primary" />
        ) : (
          <>
            <FontAwesomeIcon icon={faShoppingCart} className="p-2 text-xl" />
            <h6>Dodaj</h6>
          </>
        )}
      </button>
    </form>
  );
}
