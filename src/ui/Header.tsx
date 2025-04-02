import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCart from "./icons/ShoppingCart";

export default function Header() {
  return (
    <header className="flex items-center gap-10 p-5">
      <h1 className="text-primary text-h2 font-bold">PravaCijena</h1>
      <form
        action=""
        className="border-1 focus-within:border-primary focus-within:ring-primary flex flex-1 gap-3 rounded-xl border-foreground p-4 shadow-md transition focus-within:ring-2"
      >
        <SearchIcon className="text-primary h-6 w-6" />
        <div className="border-caption border-l-2" />
        <input
          type="text"
          id="search"
          name="search"
          aria-label="Search"
          placeholder="Pretraži proizvode"
          className="text-caption caret-primary text-h6 h-full w-full bg-background font-semibold outline-none"
        />
      </form>
      <Link href="#" className="text-h6 font-semibold">
        Kategorije
      </Link>
      <Link href="#">
        <ShoppingCart className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="bg-primary rounded-xl px-8 py-4 text-background shadow-md"
      >
        Prijavi se
      </Link>
    </header>
  );
}
