import { ReactNode } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { getProduct } from "@/lib/actions";

interface Props {
  children: ReactNode;
  params: Promise<{ productSlug: string }>;
}

export default async function ProductLayout({ children, params }: Props) {
  const { productSlug } = await params;

  const product = await getProduct(productSlug);
  if (product.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <section className="col-span-1 flex h-fit w-full flex-col justify-start gap-5">
        {product.data.imageUrl ? (
          <div className="flex h-[250px] w-full items-center justify-center">
            <Image src={product.data.imageUrl} alt={product.data.name} width={200} height={200} />
          </div>
        ) : (
          <FontAwesomeIcon icon={faQuestion} className="m-auto text-8xl" />
        )}
        <h4>{product.data.name}</h4>
      </section>
      <section className="col-span-3 flex flex-col gap-5">{children}</section>
    </main>
  );
}
