import ArrowButton from "@/ui/icons/ArrowButton";

export default async function Loading() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="h-full w-8 animate-pulse rounded-inner bg-gray-300" />
        <h4>proizvoda u košarici</h4>
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-5">
          <div className="mx-5 flex items-center gap-2 md:gap-4">
            <div className="h-[60px] w-[60px] animate-pulse rounded-inner bg-gray-300" />
            <div className="h-6 w-40 animate-pulse rounded-inner bg-gray-300" />
            <div className="ml-auto h-[43px] w-[100px] animate-pulse rounded-inner bg-gray-300 md:h-[54px] md:w-[120px]" />
            <ArrowButton className="h-min max-h-[15px] min-h-[15px] min-w-[25px] max-w-[25px] stroke-caption transition duration-300 hover:cursor-pointer hover:stroke-foreground" />
          </div>
          {i < 3 ? <div className="border-t border-separator" /> : ""}
        </div>
      ))}
    </>
  );
}
