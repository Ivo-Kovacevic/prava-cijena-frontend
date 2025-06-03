"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// Generate pagination array based on current page and total pages
function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 3 pages
  if (currentPage <= 2) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 3, an ellipsis, and the last 3 pages
  if (currentPage >= totalPages - 1) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allPages = generatePagination(currentPage, totalPages);
  const [changedPage, setChangedPage] = useState(false);

  useEffect(() => {
    if (changedPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setChangedPage(false);
    }
  }, [changedPage]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="col-span-full m-auto my-10 flex items-center gap-2 md:gap-4">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`hidden items-center sm:flex ${currentPage <= 1 ? "pointer-events-none text-gray-300" : ""}`}
        prefetch={false}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`text-2xl transition group-hover:-translate-x-1 ${currentPage <= 1 ? "text-caption" : "hover:-translate-x-1 hover:text-primary"}`}
        />
      </Link>

      {allPages.map((page, index) => {
        let position: "first" | "last" | "single" | "middle" | undefined;

        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={`${page} ${index}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
            onClick={() => setChangedPage(true)}
          />
        );
      })}

      <Link
        href={createPageURL(currentPage + 1)}
        className={`hidden items-center sm:flex ${currentPage >= totalPages ? "pointer-events-none text-gray-300" : ""}`}
        prefetch={false}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`text-2xl transition group-hover:-translate-x-1 ${currentPage >= totalPages ? "text-caption" : "hover:translate-x-1 hover:text-primary"}`}
        />
      </Link>
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
  onClick,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single";
  onClick?: () => void;
}) {
  let className = "flex sm:h-12 sm:w-12 h-10 w-10 rounded-inner items-center justify-center border";

  if (isActive) {
    className += " bg-primary text-background border-foreground";
  } else if (position !== "middle") {
    className += " hover:bg-opacity-20 hover:bg-lime-800 border-caption text-caption";
  }

  return isActive ? (
    <div className={className}>{page}</div>
  ) : position === "middle" ? (
    <>
      <div className="rounded-full border border-caption p-1" />
      <div className="rounded-full border border-caption p-1" />
    </>
  ) : (
    <Link href={href} className={className} prefetch={false} onClick={onClick}>
      <h6>{page}</h6>
    </Link>
  );
}
