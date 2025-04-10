import { CategoryType } from "@/@types/api-types";
import Link from "next/link";

export default function Category({ category }: { category: CategoryType }) {
  return (
    <article className="aspect-square min-w-72 rounded-xl bg-blue-200">
      <Link
        href="#"
        className="flex h-full w-full items-center justify-center rounded-xl"
      >
        <h4>{category.name}</h4>
      </Link>
    </article>
  );
}
