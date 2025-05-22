import Link from "next/link";
import MobileNavigation from "@/ui/header/MobileNavigation";
import Logo from "@/ui/icons/Logo";
import DesktopNavigation from "@/ui/header/DesktopNavigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-10 px-4 py-5 md:px-10">
      <Link href="/">
        <Logo className="h-10 lg:h-14" />
      </Link>

      {/* Mobile navigation */}
      <div className="lg:hidden">
        <MobileNavigation />
      </div>

      {/* Desktop navigation */}
      <div className="hidden w-full items-center gap-10 lg:flex">
        <DesktopNavigation />
      </div>
    </header>
  );
}
