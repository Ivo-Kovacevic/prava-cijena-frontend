"use client";

import { StoreLocationType } from "@/@types/api-types";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { removeSavedStore } from "@/lib/savedStoresActions";
import { useUser } from "@/context/userContext";

export default function Store({ storeLocation }: { storeLocation: StoreLocationType }) {
  const { setSavedStores } = useUser();
  const [data, formAction, isPending] = useActionState(removeSavedStore, undefined);

  useEffect(() => {
    console.dir(data);
    if (data) {
      if (data === 204) {
        setSavedStores((prev) => prev.filter((store) => store.id !== storeLocation.id));
      }
    }
  }, [data, setSavedStores, storeLocation.id]);

  return (
    <article className="flex h-[390px] min-w-80 flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4 sm:min-w-0">
      <div className="flex h-[200px] justify-center">
        <a href={storeLocation.store.storeUrl}>
          <Image
            src={storeLocation.store.imageUrl}
            alt={storeLocation.store.name}
            width={200}
            height={200}
            className="aspect-square h-[200px] object-contain"
          />
        </a>
      </div>

      <div className="flex gap-2">
        <h5 className="text-caption">Grad:</h5>
        <h5>{storeLocation.city}</h5>
      </div>

      <div className="flex gap-2">
        <h5 className="text-caption">Adresa:</h5>
        <h5 className="line-clamp-2">{storeLocation.address}</h5>
      </div>

      <form action={formAction} className="mt-auto w-full">
        <input type="hidden" name="storeLocationId" value={storeLocation.id} />

        <button
          disabled={isPending}
          className="h-[50px] w-full rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
        >
          Ukloni trgovinu
        </button>
      </form>
    </article>
  );
}
