"use client";

import Image from "next/image";
import AccordionButton from "@/ui/icons/AccordionButton";
import { StoreLocationType } from "@/@types/api-types";
import { useState } from "react";
import Link from "next/link";
import XButton from "@/ui/icons/XButton";

export default function CartLocation({ location }: { location: StoreLocationType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={location.id} className="mx-5 flex flex-col gap-5">
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src={location.store.imageUrl}
          alt={location.store.name}
          width={60}
          height={60}
          className="aspect-square h-[60px] object-contain"
        />
        <h6 className="line-clamp-3">
          {location.city}, {location.address}
        </h6>
        <h4 className="ml-auto w-fit rounded-lg bg-lime-800 bg-opacity-20 px-5 py-2 text-primary sm:px-6 sm:py-3">
          {location.locationProducts.reduce((sum, p) => sum + p.latestPrice, 0).toFixed(2)}
          &nbsp;€
        </h4>
        <AccordionButton
          className="h-min max-h-[15px] min-h-[15px] min-w-[25px] max-w-[25px] stroke-caption transition hover:cursor-pointer hover:stroke-foreground"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {location.locationProducts.map((productStore) => (
            <div key={productStore.product.id} className="group flex items-center gap-4">
              <Link
                href={`/proizvod/${productStore.product.slug}`}
                className="flex h-20 min-w-12 max-w-12 items-center sm:w-20 sm:max-w-max"
              >
                <Image
                  src={
                    productStore.product.imageUrl
                      ? productStore.product.imageUrl
                      : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
                  }
                  alt={productStore.product.name}
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)] transition group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <Link
                  href={`/proizvod/${productStore.product.slug}`}
                  className="transtion line-clamp-2 hover:text-primary"
                >
                  {productStore.product.name}
                </Link>
                <h4 className="text-primary">{productStore.latestPrice} €</h4>
              </div>
              <XButton className="round ml-auto h-6 min-h-6 w-6 min-w-6 stroke-[1.5px] text-caption hover:cursor-pointer hover:text-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
