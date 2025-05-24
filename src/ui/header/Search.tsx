"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faQuestion } from "@fortawesome/free-solid-svg-icons";
import VerticalLine from "@/ui/VerticalLine";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef, useState } from "react";
import { searchProducts } from "@/lib/actions";
import { ProductType } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Search() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(async (searchTerm: string) => {
    if (searchTerm.length < 3) {
      return;
    }

    setLoading(true);
    const result = await searchProducts(searchTerm);
    setLoading(false);

    if (result.error) {
      setProducts([]);
      return;
    }
    setProducts(result.data);
  }, 500);

  const handleSearchNavigation = (searchTerm: string) => {
    if (!searchTerm || searchTerm.length < 3) {
      return;
    }

    setShowResults(false);
    inputRef.current?.blur();

    router.push(`/pretraga?izraz=${encodeURIComponent(searchTerm)}`);
  };

  // Close searchbar when navigating to other page
  useEffect(() => {
    setShowResults(false);
    inputRef.current?.blur();
  }, [pathname]);

  // Close searchbar when clicking outside it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-1 flex-col rounded-outer border border-foreground shadow-md"
    >
      <form
        action=""
        className="flex cursor-text items-center gap-3 rounded-outer p-4 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
        onClick={() => inputRef.current?.focus()}
        onSubmit={(e) => {
          e.preventDefault();

          handleSearchNavigation(inputRef.current?.value ?? "");
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer text-2xl text-primary"
        />
        <VerticalLine className="h-6" />
        <input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          aria-label="Search"
          placeholder="Pretraži proizvode"
          className="h-full w-full bg-background text-h6 font-semibold text-caption caret-primary outline-none"
          onChange={(e) => {
            if (e.target.value.length < 3) {
              setProducts([]);
              return;
            }
            setLoading(true);
            handleSearch(e.target.value);
          }}
          onFocus={() => setShowResults(true)}
        />
      </form>

      {showResults && products.length > 0 && (
        <div className="relative">
          <ul
            className="absolute top-1 z-10 flex w-full flex-col gap-4 rounded-outer border border-caption bg-background p-4"
            onClick={() => inputRef.current?.focus()}
          >
            {products.map((product) => (
              <li key={product.id} className="flex items-center gap-4">
                <div className="flex aspect-square h-[75px]">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={`Slika proizvoda ${product.name}`}
                      width={75}
                      height={75}
                      className="aspect-square h-[75px] object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faQuestion} className="m-auto text-2xl" />
                  )}
                </div>
                <div>
                  <Link
                    href={`/proizvod/${product.slug}`}
                    className="text-h5 transition hover:text-primary"
                  >
                    {product.name}
                  </Link>
                  <h6 className="text-caption">7 trgovina</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showResults && loading && (
        <div className="relative">
          <div className="absolute top-1 z-10 flex h-[473px] w-full flex-col gap-4 rounded-outer border border-caption bg-background p-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex h-[75px] gap-5">
                <div className="aspect-square h-[75px] animate-pulse rounded-inner bg-gray-300" />
                <div>
                  <div className="my-2 h-[25px] w-[120px] animate-pulse rounded-inner bg-gray-300" />
                  <div className="h-[20px] w-[80px] animate-pulse rounded-inner bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
