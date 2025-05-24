import { ReactNode } from "react";
import Image from "next/image";
import { getProduct } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";

interface Props {
  children: ReactNode;
  params: Promise<{ productSlug: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { productSlug } = await params;

  const product = await getProduct(productSlug);
  if (product.error) {
    return <GeneralError />;
  }

  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <section className="col-span-1 flex h-fit w-full flex-col justify-start gap-5">
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
      </section>
      <section className="col-span-3 flex flex-col gap-5">{children}</section>
    </main>
  );
}
