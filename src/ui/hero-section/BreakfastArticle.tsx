import Link from "next/link";

export default function BreakfastArticle() {
  return (
    <article className="bg-breakfast flex h-[420px] flex-col justify-center gap-10 rounded-outer bg-cover bg-center bg-no-repeat px-4 md:px-10 xl:h-[520px]">
      <h1>Napravi svoj doručak</h1>
      <h5>Nemaš ideju što jesti ujutro? Imamo par prijedloga.</h5>
      <Link
        href="/clanci/napravi-svoj-dorucak"
        className="w-fit rounded-inner bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-95 focus:outline-foreground"
      >
        Pročitaj članak
      </Link>
    </article>
  );
}
