import Image from "next/image";
import { getProduct } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default async function ProductInfo({ productSlug }: { productSlug: string }) {
  const product = await getProduct(productSlug);
  if (product.error) {
    return <GeneralError />;
  }

  return (
    <div className="sticky top-5 flex flex-col justify-start gap-5">
      <div className="relative flex h-[250px] w-full items-center justify-center">
        <Image
          src={
            product.data.imageUrl
              ? product.data.imageUrl
              : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
          }
          alt={product.data.name}
          className="object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
          fill
        />
      </div>
      <h4>{product.data.name}</h4>

      <button className="m-auto flex h-[50px] w-full max-w-[400px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:bg-opacity-30">
        <FontAwesomeIcon icon={faShoppingCart} className="p-2 text-xl" />
        <h6>Dodaj</h6>
      </button>
    </div>
  );
}
