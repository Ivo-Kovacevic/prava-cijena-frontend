import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Search from "@/ui/header/Search";
import MobileNavigation from "@/ui/header/MobileNavigation";
import Logo from "@/ui/icons/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-10 px-4 py-5 md:px-10">
      <Link href="/">
        <Logo className="h-10 lg:h-14" />
      </Link>

      {/* Mobile navigation */}
      <div className="lg:hidden">
        <MobileNavigation />
      </div>

      {/* Desktop navigation */}
      <div className="hidden w-full items-center gap-10 lg:flex">
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
          href="#"
          className="hidden rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-95 md:block"
        >
          Prijavi se
        </Link>
      </div>
    </header>
  );
}
