"use server";

import { getStaticCategories } from "@/lib/actions";
import Category from "@/ui/Category";
import VerticalLine from "@/ui/VerticalLine";

export default async function Page() {
  const categories = await getStaticCategories();

  if (categories.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  return (
    <main className="mb-32 flex flex-col gap-5">
      <section className="px-4 md:px-10">
        <h3>Pregled svih kategorija proizvoda</h3>
        <p>
          Na ovoj stranici možete pogledati sve glavne kategorije s lijeve strane te njihove
          podkategorije s desne strane.
        </p>
      </section>

      <section className="flex flex-col gap-y-5">
        {categories.data.map((category) => (
          <div key={category.id} className="flex gap-x-5 pl-4 md:pl-10">
            <Category category={category} />

            <VerticalLine className="my-8 opacity-50" />

            <div className="flex gap-x-5 overflow-x-auto rounded-l-outer pr-4 md:pr-10">
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
