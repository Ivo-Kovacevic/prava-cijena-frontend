import { ProductType } from "@/@types/api-types";
import Link from "next/link";
import Image from "next/image";
import { getTrgovinaForm } from "@/lib/helpers";

export default function SearchProduct({ product }: { product: ProductType }) {
  const productLink = `/proizvod/${product.slug}`;

  return (
    <li className="group flex items-center gap-4">
      <div className="flex aspect-square h-[75px]">
        <Link href={productLink}>
          <Image
            src={
              product.imageUrl
                ? product.imageUrl
                : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.webp"
            }
            alt={`Slika proizvoda ${product.name}`}
            width={75}
            height={75}
            className={`aspect-square h-[75px] object-contain transition group-hover:scale-105 ${product.imageUrl ? "drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]" : ""}`}
          />
        </Link>
      </div>
      <div>
        <Link href={productLink} className="text-h5 transition hover:text-primary">
          {product.name}
        </Link>
        <h6 className="text-caption">
          {product.numberOfStores} {getTrgovinaForm(product.numberOfStores)}
        </h6>
      </div>
    </li>
  );
}
