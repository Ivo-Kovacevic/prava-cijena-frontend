import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Search from "@/ui/header/Search";

export default function DesktopNavigation() {
  return (
    <>
      <Search />

      <Link
        href="/kategorije"
        className="hidden text-h6 font-semibold transition hover:text-primary md:block"
      >
        Kategorije
      </Link>

      <Link href="#" className="flex items-center transition hover:text-primary">
        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
      </Link>

      <Link
        href="/prijava"
        className="hidden rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-95 md:block"
      >
        Prijavi se
      </Link>
    </>
  );
}
