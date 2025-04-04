import { ProductType } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: ProductType }) {
  return (
    <article
      key={product.id}
      className="flex min-w-80 flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4"
    >
      <div className="flex h-52 justify-center">
        <Image
          src={`https://res.cloudinary.com/dqbe0apqn/image/upload/v1743715539/${product.slug}`}
          alt={"Slika proizvoda"}
          width={208}
          height={208}
          className="object-contain drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        />
      </div>
      <h5>{product.name}</h5>
      <h6 className="text-caption">7 trgovina</h6>
      <div className="mt-auto flex items-center">
        <h2 className="m-auto text-primary">1,02 €</h2>

        <Link
          href="#"
          className="mr-0 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
        >
          <h6>Pregledaj</h6>
        </Link>
      </div>
    </article>
  );
}
