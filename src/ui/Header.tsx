import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCart from "./icons/ShoppingCart";

export default function Header() {
  return (
    <header className="flex items-center gap-10 px-10 py-5">
      <h1 className="text-h2 font-bold text-primary">PravaCijena</h1>
      <form
        action=""
        className="flex flex-1 gap-3 rounded-xl border border-foreground p-4 shadow-md transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
      >
        <SearchIcon className="h-6 w-6 text-primary" />
        <div className="border-l-2 border-caption" />
        <input
          type="text"
          id="search"
          name="search"
          aria-label="Search"
          placeholder="Pretraži proizvode"
          className="h-full w-full bg-background text-h6 font-semibold text-caption caret-primary outline-none"
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
        className="rounded-xl bg-primary px-8 py-4 text-background shadow-md"
      >
        Prijavi se
      </Link>
    </header>
  );
}
