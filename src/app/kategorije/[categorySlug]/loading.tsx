import Filter from "@/ui/icons/Filter";
import ProductSkeleton from "@/ui/skeletons/ProductSkeleton";

export default function Loading() {
  return (
    <div className="grid gap-5 px-4 pb-4 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div className="flex flex-col gap-5 lg:col-span-1">
        <div className="flex items-center justify-between">
          <h3>Filtriranje</h3>
          <Filter className="h-7" />
        </div>

        <div className="h-[27px] w-[200px] animate-pulse rounded-outer bg-gray-300 md:h-[30px]" />

        <div className="hidden lg:block">
          <div className="flex flex-col gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-fit">
                <div className="h-[24px] w-[150px] animate-pulse rounded-outer bg-gray-300 md:h-[27px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        <div className="h-[33px] w-[200px] animate-pulse rounded-outer bg-gray-300 md:h-[36px]" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 80 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
