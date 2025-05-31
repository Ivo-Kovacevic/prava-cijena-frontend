export default function ProductInfoSkeleton() {
  return (
    <div className="sticky top-5 flex flex-col justify-start gap-5">
      <div className="m-auto h-[250px] w-[250px] max-w-full animate-pulse rounded-outer bg-gray-300" />
      <div className="h-[27px] w-[250px] max-w-full animate-pulse rounded-outer bg-gray-300 md:h-[30px]" />
      <div className="m-auto h-[50px] w-[400px] max-w-full animate-pulse gap-2 rounded-outer bg-gray-300" />
    </div>
  );
}
