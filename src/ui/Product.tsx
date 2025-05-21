import { ProductType } from "@/@types/api-types";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Product({ product }: { product: ProductType }) {
  return (
    <article className="flex h-[390px] min-w-80 flex-col gap-2 rounded-xl border border-black border-opacity-20 p-4 sm:min-w-0">
      <div className="flex h-[200px] justify-center">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={`Slika proizvoda ${product.name}`}
            width={200}
            height={200}
            className="aspect-square h-[200px] object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
          />
        ) : (
          <FontAwesomeIcon icon={faQuestion} className="m-auto text-8xl" />
        )}
      </div>
      <h5 className="line-clamp-2">{product.name}</h5>
      <h6 className="text-caption">{product.numberOfStores} trgovine</h6>
      <div className="mt-auto flex items-center">
        <h2 className="m-auto text-primary">{product.lowestPrice} €</h2>

        <Link
          href={`/proizvod/${product.slug}`}
          className="mr-0 h-[50px] w-[125px] rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30"
        >
          <h6>Pregledaj</h6>
        </Link>
      </div>
    </article>
  );
}
