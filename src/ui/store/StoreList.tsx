"use client";

import { StoreLocationType } from "@/@types/api-types";
import Store from "@/ui/store/Store";
import { useUser } from "@/context/userContext";
import { useEffect } from "react";

export default function StoreList({ storeLocations }: { storeLocations: StoreLocationType[] }) {
  const { savedStores, setSavedStores } = useUser();

  useEffect(() => {
    setSavedStores(storeLocations);
  }, [storeLocations, setSavedStores]);

  return (
    <>
      {savedStores.map((storeLocation) => (
        <Store key={storeLocation.id} storeLocation={storeLocation} />
      ))}
    </>
  );
}
