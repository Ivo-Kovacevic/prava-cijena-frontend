import Image from "next/image";
import { getProduct } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";

export default async function ProductInfo({ productSlug }: { productSlug: string }) {
  const product = await getProduct(productSlug);
  if (product.error) {
    return <GeneralError />;
  }

  return (
    <>
      <div className="relative flex h-[250px] w-full items-center justify-center">
        <Image
          src={
            product.data.imageUrl
              ? product.data.imageUrl
              : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
          }
          alt={product.data.name}
          className="object-contain"
          fill
        />
      </div>
      <h4>{product.data.name}</h4>
    </>
  );
}
