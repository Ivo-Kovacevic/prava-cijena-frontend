import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Search from "@/ui/header/Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-10 px-4 py-5 md:px-10">
      <Link href="/" className="text-h2 font-bold text-primary">
        PravaCijena
      </Link>

      <div className="lg:hidden">
        <FontAwesomeIcon icon={faBars} className="text-h2" />
      </div>

      <div className="hidden w-full items-center gap-10 lg:flex">
        <Search />

        <Link href="/kategorije" className="hidden text-h6 font-semibold md:block">
          Kategorije
        </Link>

        <Link href="#" className="flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
        </Link>

        <Link
          href="#"
          className="hidden rounded-xl bg-primary px-8 py-4 text-background shadow-md md:block"
        >
          Prijavi se
        </Link>
      </div>
    </header>
  );
}
