import ProductSkeleton from "@/ui/skeletons/ProductSkeleton";
import PaginationSkeleton from "@/ui/skeletons/PaginationSkeleton";

export default function Loading() {
  return (
    <>
      <div className="col-span-full h-[33px] w-[200px] animate-pulse rounded-outer bg-gray-300 md:h-[36px]" />

      {Array.from({ length: 60 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}

      <PaginationSkeleton />
    </>
  );
}
