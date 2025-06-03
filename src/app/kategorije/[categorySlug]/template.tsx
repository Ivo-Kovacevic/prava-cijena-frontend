"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const key = pathname + "?" + searchParams.toString();

  return (
    <section
      key={key}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4"
    >
      {children}
    </section>
  );
}
