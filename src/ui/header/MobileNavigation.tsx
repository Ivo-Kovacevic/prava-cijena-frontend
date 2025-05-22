"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faClose,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "@/ui/header/Search";

export default function MobileNavigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { to: "/", label: "Početna" },
    { to: "/kategorije", label: "Kategorije" },
  ];

  useEffect(() => {
    document.body.style.overflow = showSearch ? "hidden" : "auto";
  }, [showSearch]);

  return (
    <>
      <div className="flex items-center gap-8">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-h3 hover:cursor-pointer"
          onClick={() => setShowSearch((prev) => !prev)}
        />
        <FontAwesomeIcon icon={faShoppingCart} className="text-h3" />
        <FontAwesomeIcon
          icon={showNavigation ? faClose : faBars}
          className={`z-20 text-h2 hover:cursor-pointer ${showNavigation ? "fixed translate-x-[60px]" : "static"}`}
          onClick={() => setShowNavigation(!showNavigation)}
        />
      </div>

      {/* Navigation menu*/}
      <div
        className={`fixed inset-0 z-10 bg-foreground transition ${
          !showNavigation && "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-background">
          {navItems.map((item, index) => (
            <div
              key={item.to}
              className={`transform transition ${showNavigation ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.to}
                className="text-3xl transition hover:text-primary"
                onClick={() => setShowNavigation(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {showSearch && (
        <div className="fixed inset-0 z-30 flex flex-col items-start gap-2 bg-background p-4 py-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="pl-3 text-h2 hover:cursor-pointer"
            onClick={() => setShowSearch(false)}
          />

          <div className="w-full">
            <Search />
          </div>
        </div>
      )}
    </>
  );
}
