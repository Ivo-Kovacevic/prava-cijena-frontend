export default async function PaginationSkeleton() {
  return (
    <div className="col-span-full m-auto my-10 flex items-center gap-2 md:gap-4">
      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />
      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />
      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />

      <div className="animate-pulse rounded-full bg-gray-300 p-1" />
      <div className="animate-pulse rounded-full bg-gray-300 p-1" />

      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />
      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />
      <div className="h-10 w-10 animate-pulse rounded-inner bg-gray-300 sm:h-12 sm:w-12" />
    </div>
  );
}
