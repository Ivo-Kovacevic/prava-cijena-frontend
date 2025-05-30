import Filter from "@/ui/icons/Filter";

export default async function CategorySidebarSkeleton() {
  return (
    <div className="sticky top-5 flex flex-col gap-5 lg:col-span-1">
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

      <div />
    </div>
  );
}
