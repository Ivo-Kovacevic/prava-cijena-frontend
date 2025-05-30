import { ReactNode, Suspense } from "react";
import ProductInfo from "@/ui/product/ProductInfo";
import ProductInfoSkeleton from "@/ui/skeletons/ProductInfoSkeleton";

interface Props {
  children: ReactNode;
  params: Promise<{ productSlug: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { productSlug } = await params;

  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <section className="relative col-span-1 h-full w-full flex-col">
        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductInfo productSlug={productSlug} />
        </Suspense>
      </section>
      <section className="col-span-3 flex flex-col gap-5">{children}</section>
    </main>
  );
}
