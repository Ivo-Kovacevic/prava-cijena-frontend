import { CategoryType } from "@/@types/api-types";
import Link from "next/link";

export default function Subcategories({
  subcategories,
}: {
  subcategories: CategoryType[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className="group w-fit">
          <Link
            href={`/kategorije/${subcategory.slug}`}
            className="block text-h5 transition group-hover:-translate-y-1 group-hover:text-primary"
          >
            {subcategory.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
