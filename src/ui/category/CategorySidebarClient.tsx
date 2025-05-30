"use client";

import Filter from "@/ui/icons/Filter";
import Subcategories from "@/ui/category/Subcategories";
import { CategoryType } from "@/@types/api-types";
import { useState } from "react";

export default function CategorySidebarClient({ category }: { category: CategoryType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-5 flex flex-col gap-5 lg:col-span-1">
      <div className="flex items-center justify-between">
        <h3>Filtriranje</h3>
        <Filter
          className="h-7 hover:cursor-pointer lg:hover:cursor-default"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <h4>{category.name}</h4>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        } lg:block lg:max-h-full`}
      >
        <Subcategories subcategories={category.subcategories} />
      </div>
    </div>
  );
}
