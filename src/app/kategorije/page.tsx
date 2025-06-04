import { getStaticCategories } from "@/lib/actions";
import Category from "@/ui/Category";
import VerticalLine from "@/ui/VerticalLine";
import GeneralError from "@/ui/icons/GeneralError";
import type { Metadata } from "next";
import { categoryOrder } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Prava Cijena - Sve kategorije",
  description: "Pregledaj sve kategorije proizvoda i namirnica.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default async function Page() {
  const categories = await getStaticCategories();

  if (categories.error) {
    return <GeneralError />;
  }

  const sortedCategories = [...categories.data].sort((a, b) => {
    return categoryOrder.indexOf(a.name) - categoryOrder.indexOf(b.name);
  });

  return (
    <main className="mb-32 flex flex-col gap-5">
      <section className="px-4 md:px-10">
        <h3>Sve kategorije</h3>
      </section>

      <section className="scrollbar-custom flex flex-col gap-y-5">
        {sortedCategories.map((category) => (
          <div
            key={category.id}
            className="scrollbar-none-desktop scrollbar-thin-desktop flex gap-x-5 overflow-x-scroll pl-4 md:pl-10"
          >
            <Category category={category} />
            <VerticalLine className="my-8 opacity-50" />

            <div className="scrollbar-none-mobile scrollbar-thin-mobile flex gap-x-5 rounded-l-outer pr-4 md:overflow-x-scroll md:pr-10">
              {category.subcategories.map((subcategory) => (
                <Category key={subcategory.id} category={subcategory} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
