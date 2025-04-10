import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCart from "./icons/ShoppingCart";
import VerticalLine from "./VerticalLine";

export default function Header() {
  return (
    <header className="flex items-center gap-10 px-10 py-5">
      <Link href="/" className="text-h2 font-bold text-primary">
        PravaCijena
      </Link>
      <form
        action=""
        className="flex flex-1 gap-3 rounded-xl border border-foreground p-4 shadow-md transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
      >
        <SearchIcon className="h-6 w-6 text-primary" />
        <VerticalLine />
        <input
          type="text"
          id="search"
          name="search"
          aria-label="Search"
          placeholder="Pretraži proizvode"
          className="h-full w-full bg-background text-h6 font-semibold text-caption caret-primary outline-none"
        />
      </form>
      <Link href="kategorije" className="hidden text-h6 font-semibold md:block">
        Kategorije
      </Link>
      <Link href="#" className="hidden md:block">
        <ShoppingCart className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="hidden rounded-xl bg-primary px-8 py-4 text-background shadow-md md:block"
      >
        Prijavi se
      </Link>
    </header>
  );
}
