import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";

export default function SeeMore({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-end px-4 text-primary md:px-10">
      <Link href="#" className="group flex items-center space-x-2">
        <h4>{text}</h4>
        <ArrowRight className="h-5 transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
