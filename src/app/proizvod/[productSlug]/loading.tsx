export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <div className="col-span-1 flex w-full flex-col gap-5">
        <div className="flex h-[250px] w-full items-center justify-center">
          <div className="aspect-square h-[200px] animate-pulse rounded-outer bg-gray-300" />
        </div>
        <div className="h-[20px] animate-pulse rounded-inner bg-gray-300"></div>
      </div>
      <section className="col-span-3 flex flex-col gap-5">
        <div className="h-[225px] animate-pulse rounded-outer bg-gray-300" />
        <div className="h-[225px] animate-pulse rounded-outer bg-gray-300" />
        <div className="h-[225px] animate-pulse rounded-outer bg-gray-300" />
        <div className="h-[225px] animate-pulse rounded-outer bg-gray-300" />
      </section>
    </div>
  );
}
