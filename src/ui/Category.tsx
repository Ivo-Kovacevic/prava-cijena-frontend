import { CategoryType } from "@/@types/api-types";
import Link from "next/link";
import Svg from "./Svg";

export default function Category({ category }: { category: CategoryType }) {
  return (
    <article
      className="group aspect-square h-36 rounded-outer transition md:h-48 lg:h-60 xl:h-72"
      style={{ backgroundColor: `${category.hexColor}20` }}
    >
      <Link
        href={`kategorije/${category.slug}`}
        className="flex h-full w-full flex-col items-center justify-center rounded-outer p-2 text-center md:p-5"
      >
        {category.imageUrl && (
          <Svg svgUrl={category.imageUrl} color={category.hexColor} size={128} />
        )}
        <h4 className="line-clamp-2 lg:line-clamp-3">{category.name}</h4>
      </Link>
    </article>
  );
}
