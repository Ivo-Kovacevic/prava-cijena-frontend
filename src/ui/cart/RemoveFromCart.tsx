"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useActionState, useEffect } from "react";
import { removeProductFromCart } from "@/lib/cartActions";
import { useUser } from "@/context/userContext";
import { useNotification } from "@/context/notificationContext";

export default function RemoveFromCart({ productId }: { productId: string }) {
  const { setNotification } = useNotification();
  const { setCart } = useUser();
  const [data, formAction, isPending] = useActionState(removeProductFromCart, undefined);

  useEffect(() => {
    if (data) {
      if (data === 204) {
        setCart((prev) => prev.filter((product) => product.id !== productId));

        setNotification(null);
        setTimeout(() => {
          setNotification("Uklonjeno iz košarice");
        }, 0);
      }
    }
  }, [data, setCart, productId]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <button
        disabled={isPending}
        className={`m-auto flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30 ${isPending ? "hover:cursor-wait" : ""}`}
      >
        {isPending ? (
          <div className="loader" />
        ) : (
          <>
            <FontAwesomeIcon icon={faShoppingCart} className="p-2 text-xl" />
            <h6>Ukloni</h6>
          </>
        )}
      </button>
    </form>
  );
}
