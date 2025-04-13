import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SeeMore({ href, text }: { href: string; text: string }) {
  return (
    <div className="flex flex-col items-end px-4 text-primary md:px-10">
      <Link href={href} className="group flex items-center space-x-2">
        <h4>{text}</h4>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-xl transition group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
