import { CategoryType } from "@/@types/api-types";
import Link from "next/link";
import Svg from "./Svg";

export default function Category({ category }: { category: CategoryType }) {
  return (
    <article
      className="group aspect-square h-48 rounded-xl transition lg:h-60 xl:h-72"
      style={{ backgroundColor: `${category.hexColor}20` }}
    >
      <Link
        href={`kategorije/${category.slug}`}
        className="flex h-full w-full flex-col items-center justify-center rounded-xl p-5 text-center"
      >
        {category.imageUrl && (
          <Svg
            svgUrl={category.imageUrl}
            color={category.hexColor}
            size={128}
          />
        )}
        <h4>{category.name}</h4>
      </Link>
    </article>
  );
}
