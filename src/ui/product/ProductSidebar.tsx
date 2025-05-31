import Image from "next/image";
import { getProduct } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";
import CartButton from "@/ui/cart/Cart";

export default async function ProductSidebar({ productSlug }: { productSlug: string }) {
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

      <CartButton productId={product.data.id} />
    </div>
  );
}
