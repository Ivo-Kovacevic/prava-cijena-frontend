"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Početna" },
    { to: "/kategorije", label: "Kategorije" },
  ];

  return (
    <>
      <FontAwesomeIcon
        icon={isOpen ? faClose : faBars}
        className={`z-20 text-h2 hover:cursor-pointer ${isOpen ? "fixed -translate-x-6 -translate-y-4" : "static"}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`fixed inset-0 z-10 bg-foreground transition ${
          !isOpen && "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-background">
          {navItems.map((item, index) => (
            <div
              key={item.to}
              className={`transform transition ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.to}
                className="text-3xl transition hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
