"use client";

import { StoreType } from "@/@types/api-types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowTrendUp, faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useNotification } from "@/context/notificationContext";

export default function ProductStore({
  store,
  productSlug,
}: {
  store: StoreType;
  productSlug: string;
}) {
  const { setNotification } = useNotification();

  const handleUnfinishedFeature = () => {
    setNotification(null);
    setTimeout(() => {
      setNotification("Funkcija trenutno nije dostupna");
    }, 0);
  };

  return (
    <article
      key={store.id}
      className="grid h-[225px] grid-cols-2 gap-5 rounded-outer border border-caption px-5 py-5 lg:grid-cols-3 lg:px-8 xl:px-14 2xl:px-20"
    >
      <div className="col-span-1 flex flex-col items-center justify-around lg:col-span-2 lg:flex-row">
        <a
          href={store.storeUrl}
          target="_blank"
          className="relative flex h-full w-full max-w-[250px] flex-1 items-center justify-center"
        >
          <Image src={store.imageUrl} alt={store.name} fill={true} className="object-contain" />
        </a>
        <div className="flex flex-1 items-center justify-center text-primary">
          <h2 className="pl-5">
            <Link
              href={`/proizvod/${productSlug}/${store.slug}`}
              className="group flex items-center gap-2"
            >
              {" "}
              {store.price} €
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl transition group-hover:translate-x-1"
              />
            </Link>
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-5">
        <span
          role="button"
          tabIndex={0}
          onClick={handleUnfinishedFeature}
          onKeyDown={(e) => e.key === "Enter" && handleUnfinishedFeature()}
          className="flex cursor-pointer items-center gap-2 transition hover:text-primary"
        >
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-xl" />
          <h6>Povijest cijene</h6>
        </span>
        {store.productUrl ? (
          <a
            href={store.productUrl}
            target="_blank"
            className="flex items-center gap-2 transition hover:text-primary"
          >
            <FontAwesomeIcon icon={faShop} />
            <h6>U trgovinu</h6>
          </a>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
