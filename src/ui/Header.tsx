import Link from "next/link";
import VerticalLine from "./VerticalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-10 px-10 py-5">
      <Link href="/" className="text-h2 font-bold text-primary">
        PravaCijena
      </Link>

      <div className="lg:hidden">
        <FontAwesomeIcon icon={faBars} className="text-h2" />
      </div>

      <div className="hidden w-full items-center gap-10 lg:flex">
        <form
          action=""
          className="flex flex-1 items-center gap-3 rounded-xl border border-foreground p-4 shadow-md transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-2xl text-primary"
          />
          <VerticalLine className="h-6" />
          <input
            type="text"
            id="search"
            name="search"
            aria-label="Search"
            placeholder="Pretraži proizvode"
            className="h-full w-full bg-background text-h6 font-semibold text-caption caret-primary outline-none"
          />
        </form>
        <Link
          href="/kategorije"
          className="hidden text-h6 font-semibold md:block"
        >
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
