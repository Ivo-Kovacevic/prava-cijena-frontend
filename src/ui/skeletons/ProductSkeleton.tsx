export default async function ProductSkeleton() {
  return (
    <div className="flex h-[378px] min-w-80 animate-pulse flex-col gap-2 rounded-outer bg-gray-300 p-4 sm:min-w-0">
      <div className="flex h-[200px] justify-center">
        <div className="h-200 aspect-square animate-pulse rounded-inner bg-gray-400" />
      </div>
      <div className="h-[24px] animate-pulse rounded-inner bg-gray-400" />
      <div className="h-[20px] w-1/5 animate-pulse rounded-inner bg-gray-400" />
      <div className="mt-auto flex items-center">
        <div className="m-auto h-[36px] w-[100px] animate-pulse rounded-inner bg-gray-400 text-primary md:h-[45px]" />

        <div className="mr-0 h-[50px] w-[125px] animate-pulse rounded-inner bg-gray-400 px-6 py-3 text-primary transition hover:bg-opacity-30 md:h-[45px]"></div>
      </div>
    </div>
  );
}
