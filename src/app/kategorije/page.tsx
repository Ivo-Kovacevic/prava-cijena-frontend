import Category from "@/ui/Category";
import { getCategories } from "./actions";
import VerticalLine from "@/ui/VerticalLine";

export default async function Page() {
  const categories = await getCategories();

  return (
    <main className="mb-32 flex flex-col gap-5 px-4 md:px-10">
      <section>
        <h3>Pregled svih kategorija proizvoda</h3>
        <p>
          Na ovoj stranici možete pogledati sve glavne kategorije s lijeve
          strane te njihove podkategorije s desne strane.
        </p>
      </section>

      <section className="flex flex-col gap-y-5">
        {categories.map((category) => (
          <div key={category.id} className="flex gap-x-5">
            <Category category={category} />
            <VerticalLine className="my-8 opacity-50" />
            <div className="flex gap-x-5 overflow-x-auto rounded-xl">
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
