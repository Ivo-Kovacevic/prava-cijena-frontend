export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-10 text-center">
      <h3>Cijena</h3>
      <h3>Adresa</h3>
      <h3>Grad</h3>
      {Array.from({ length: 20 }).map(() => (
        <>
          <div className="m-auto h-[30px] w-[60px] max-w-full animate-pulse rounded-outer bg-gray-300" />
          <div className="m-auto h-[30px] w-[230px] max-w-full animate-pulse rounded-outer bg-gray-300" />
          <div className="m-auto h-[30px] w-[150px] max-w-full animate-pulse rounded-outer bg-gray-300" />
        </>
      ))}
    </div>
  );
}
