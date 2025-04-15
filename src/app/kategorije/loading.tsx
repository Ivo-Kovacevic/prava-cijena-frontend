import VerticalLine from "@/ui/VerticalLine";
import CategorySkeleton from "@/ui/skeletons/CategorySkeleton";

export default function Loading() {
  return (
    <div className="mb-32 flex flex-col gap-5 px-4 md:px-10">
      <div className="flex h-[81px] flex-col gap-1 lg:h-[60px]">
        <div className="h-[30px] w-[300px] animate-pulse rounded-outer bg-gray-300" />
        <div className="h-[25px] w-[400px] animate-pulse rounded-outer bg-gray-300" />
      </div>

      <div className="flex flex-col gap-y-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-x-5">
            <CategorySkeleton />

            <VerticalLine className="my-8 opacity-50" />

            <div className="flex gap-x-5 overflow-x-auto rounded-xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <CategorySkeleton key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
