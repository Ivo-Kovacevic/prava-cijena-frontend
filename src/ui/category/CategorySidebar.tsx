import { getCategory } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";
import CategorySidebarClient from "@/ui/category/CategorySidebarClient";

export default async function CategorySidebar({ categorySlug }: { categorySlug: string }) {
  const category = await getCategory(categorySlug);

  if (category.error) {
    return <GeneralError />;
  }

  return <CategorySidebarClient category={category.data} />;
}
