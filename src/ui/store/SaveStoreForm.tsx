"use client";

import { useActionState, useEffect, useState } from "react";
import { getStoreLocations, getStores } from "@/lib/actions";
import { StoreLocationType, StoreType } from "@/@types/api-types";
import { saveStoreLocation } from "@/lib/savedStoresActions";
import { useUser } from "@/context/userContext";
import { useNotification } from "@/context/notificationContext";

export default function SaveStoreForm() {
  const { setNotification } = useNotification();
  const { setSavedStores } = useUser();

  const [stores, setStores] = useState<StoreType[]>([]);
  const [selectedStore, setSelectedStore] = useState("");

  const [storeLocations, setStoreLocations] = useState<StoreLocationType[]>([]);

  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [addresses, setAddresses] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  const [data, formAction, isPending] = useActionState(saveStoreLocation, undefined);

  useEffect(() => {
    if (data && typeof data === "object" && "id" in data) {
      setSavedStores((previousState) => [...previousState, data]);

      setNotification(null);
      setTimeout(() => {
        setNotification("Dodana trgovina");
      }, 0);
    }
  }, [data, setSavedStores, setNotification]);

  useEffect(() => {
    getStores().then((res) => {
      if (!res.error) setStores(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedStore) {
      getStoreLocations(selectedStore).then((res) => {
        if (!res.error) {
          setStoreLocations(res.data);

          const cities = [...new Set(res.data.map((sl) => sl.city))];

          setCities(cities);
        }
      });
    }
  }, [selectedStore]);

  useEffect(() => {
    if (selectedCity) {
      const filteredAddresses = storeLocations
        .filter((sl) => sl.city === selectedCity)
        .map((sl) => sl.address)
        .sort();

      setAddresses(filteredAddresses);
    } else {
      setAddresses([]);
    }
  }, [selectedCity, storeLocations]);

  return (
    <article className="h-[390px] min-w-80 rounded-xl border border-black border-opacity-20 p-4 sm:min-w-0">
      <form action={formAction} className="flex h-full flex-col justify-between">
        <h4>Dodaj novu trgovinu</h4>

        <div>
          <h5 className="text-caption">Odaberi trgovinu</h5>
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="w-full rounded-inner bg-background p-2 hover:cursor-pointer"
          >
            <option value="">Trgovina</option>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h5 className="text-caption">Odaberi grad</h5>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!cities.length}
            className={`w-full rounded-inner bg-background p-2 ${selectedStore ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}
            required
          >
            <option value="">Grad</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h5 className="text-caption">Odaberi adresu</h5>
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            disabled={!addresses.length}
            className={`w-full rounded-inner bg-background p-2 ${selectedCity ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}
            required
          >
            <option value="">Adresa</option>
            {addresses.map((addr) => (
              <option key={addr} value={addr}>
                {addr}
              </option>
            ))}
          </select>
        </div>

        <input
          type="hidden"
          name="storeLocationId"
          value={
            storeLocations.find(
              (sl) =>
                sl.city === selectedCity &&
                sl.address === selectedAddress &&
                sl.storeId === selectedStore,
            )?.id || ""
          }
        />

        <button
          disabled={!(selectedCity && selectedAddress) || isPending}
          className={`flex h-[50px] items-center justify-center rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition ${isPending ? "hover:cursor-wait" : ""} ${selectedCity && selectedAddress ? "hover:bg-opacity-30" : "hover:cursor-not-allowed"}`}
        >
          {isPending ? <div className="loader text-primary" /> : "Spremi trgovinu"}
        </button>
      </form>
    </article>
  );
}
