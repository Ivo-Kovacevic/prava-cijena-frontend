"use client";

import { StoreLocationType } from "@/@types/api-types";
import { getProizvodForm } from "@/lib/helpers";
import { useUser } from "@/context/userContext";
import CartLocation from "@/ui/cart/CartLocation";

export default function CartClient({ storeLocations }: { storeLocations: StoreLocationType[] }) {
  const { cart } = useUser();

  return (
    <>
      <h4>
        {cart.length} {getProizvodForm(cart.length)} u košarici
      </h4>
      {storeLocations.map((location, i) => (
        <div key={location.id} className="flex flex-col gap-5">
          <CartLocation location={location} />
          {i < storeLocations.length - 1 ? <div className="border-t border-separator" /> : ""}
        </div>
      ))}
    </>
  );
}
