import ProductSkeleton from "@/ui/skeletons/ProductSkeleton";
import SeeMoreSkeleton from "@/ui/skeletons/SeeMoreSkeleton";
import CategorySkeleton from "@/ui/skeletons/CategorySkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-40 py-32">
      <div className="flex h-[400px] items-center gap-5 px-4 md:h-[520px] md:px-10">
        <div className="flex w-full flex-col gap-5 xl:w-1/2">
          <div className="h-[85px] animate-pulse rounded-outer bg-gray-300" />
          <div className="h-[85px] w-4/5 animate-pulse rounded-outer bg-gray-300" />

          <div className="h-[27px] animate-pulse rounded-outer bg-gray-300" />
          <div className="h-[27px] w-4/5 animate-pulse rounded-outer bg-gray-300" />
          <div />
        </div>
        <div className="hidden xl:flex xl:w-1/2 xl:flex-col xl:gap-5">
          <div className="h-[250px] animate-pulse rounded-outer bg-gray-300" />
          <div className="h-[250px] animate-pulse rounded-outer bg-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="w mx-4 h-[33px] w-[250px] animate-pulse rounded-outer bg-gray-300 md:mx-10 md:h-[36px]" />
        <div className="flex gap-5 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
        <SeeMoreSkeleton />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="w mx-4 h-[33px] w-[250px] animate-pulse rounded-outer bg-gray-300 md:mx-10 md:h-[36px]" />
        <div className="flex gap-x-5 overflow-x-auto px-4 pb-4 md:px-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>
        <SeeMoreSkeleton />
      </div>
    </div>
  );
}
