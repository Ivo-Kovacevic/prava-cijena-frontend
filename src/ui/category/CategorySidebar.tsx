import Filter from "@/ui/icons/Filter";
import Filters from "@/ui/category/Filters";
import Subcategories from "@/ui/category/Subcategories";
import { getCategory } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";

export default async function CategorySidebar({ categorySlug }: { categorySlug: string }) {
  const category = await getCategory(categorySlug);

  if (category.error) {
    return <GeneralError />;
  }

  return (
    <section className="flex flex-col gap-5 lg:col-span-1">
      <div className="flex items-center justify-between">
        <h3>Filtriranje</h3>
        <Filter className="h-7" />
      </div>

      <h4>{category.data.name}</h4>

      <div className="hidden lg:block">
        {category.data.labels.length > 0 ? (
          <Filters labels={category.data.labels} />
        ) : (
          <Subcategories subcategories={category.data.subcategories} />
        )}
      </div>
    </section>
  );
}
