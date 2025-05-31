"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Search from "@/ui/header/Search";
import { useAuth } from "@/context/authContext";

export default function DesktopNavigation() {
  const { user } = useAuth();

  return (
    <>
      <Search />

      <Link
        href="/kategorije"
        className="hidden text-h6 font-semibold transition hover:text-primary md:block"
      >
        Kategorije
      </Link>

      <Link href="/kosarica" className="flex items-center transition hover:text-primary">
        <FontAwesomeIcon icon={faShoppingCart} className="p-2 text-xl" />
      </Link>

      {user ? (
        <Link href="/profil" className="flex items-center transition hover:text-primary">
          <FontAwesomeIcon icon={faUser} className="p-2 text-xl" />
        </Link>
      ) : (
        <Link
          href="/prijava"
          prefetch={false}
          className="hidden rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-95 focus:outline-foreground md:block"
        >
          Prijavi se
        </Link>
      )}
    </>
  );
}
