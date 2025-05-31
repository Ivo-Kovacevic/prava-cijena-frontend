"use client";

import { ProductType } from "@/@types/api-types";
import { useUser } from "@/context/userContext";
import { useEffect } from "react";
import Product from "@/ui/Product";

export default function SavedProductList({ products }: { products: ProductType[] }) {
  const { savedProducts, setSavedProducts } = useUser();

  useEffect(() => {
    setSavedProducts(products);
  }, [products, setSavedProducts]);

  return (
    <>
      {savedProducts.length > 0 ? (
        savedProducts.map((product) => <Product key={product.id} product={product} />)
      ) : (
        <div className="col-span-full flex h-[390px] items-center justify-center text-caption">
          Nema omiljenih proizvoda
        </div>
      )}
    </>
  );
}
