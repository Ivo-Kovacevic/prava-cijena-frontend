import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductInfoSkeleton() {
  return (
    <div className="sticky top-5 flex flex-col justify-start gap-5">
      <div className="m-auto h-[250px] w-[250px] max-w-full animate-pulse rounded-outer bg-gray-300" />
      <div className="h-[27px] w-[250px] max-w-full animate-pulse rounded-outer bg-gray-300 md:h-[30px]" />
      <div className="flex h-[50px] items-center justify-center gap-2 rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary transition hover:cursor-not-allowed hover:bg-opacity-30">
        <FontAwesomeIcon icon={faShoppingCart} className="p-2 text-xl" />
        <h6>Dodaj</h6>
      </div>
    </div>
  );
}
