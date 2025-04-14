"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import VerticalLine from "@/ui/VerticalLine";
import { useDebouncedCallback } from "use-debounce";
import { useRef } from "react";
import { searchProducts } from "@/lib/actions";

export default function Search() {
  const handleSearch = useDebouncedCallback(async (term: string) => {
    const products = await searchProducts(term);
    console.log(products);
  }, 300);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      action=""
      className="flex flex-1 cursor-text items-center gap-3 rounded-xl border border-foreground p-4 shadow-md transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
      onClick={() => inputRef.current?.focus()}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer text-2xl text-primary" />
      <VerticalLine className="h-6" />
      <input
        ref={inputRef}
        type="text"
        id="search"
        name="search"
        aria-label="Search"
        placeholder="Pretraži proizvode"
        className="h-full w-full bg-background text-h6 font-semibold text-caption caret-primary outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
}
