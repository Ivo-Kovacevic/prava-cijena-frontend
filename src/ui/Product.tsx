import { ProductType } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: ProductType }) {
  const productLink = `/proizvod/${product.slug}`;

  return (
    <article className="flex h-[390px] min-w-80 flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4 sm:min-w-0">
      <div className="flex h-[200px] justify-center">
        <Link href={productLink}>
          <Image
            src={
              product.imageUrl
                ? product.imageUrl
                : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
            }
            alt={`Slika proizvoda ${product.name}`}
            width={200}
            height={200}
            className="aspect-square h-[200px] object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
          />
        </Link>
      </div>
      <Link href={productLink}>
        <h5 className="line-clamp-2 transition hover:text-primary">{product.name}</h5>
      </Link>
      <h6 className="text-caption">{product.numberOfStores} trgovine</h6>
      <div className="mt-auto flex items-center">
        <h2 className="m-auto text-primary">{product.lowestPrice} €</h2>

        <Link
          href={productLink}
          className="mr-0 h-[50px] w-[125px] rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
        >
          <h6>Pregledaj</h6>
        </Link>
      </div>
    </article>
  );
}
