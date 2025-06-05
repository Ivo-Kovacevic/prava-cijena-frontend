import Link from "next/link";

export default function AsianFoodArticle() {
  return (
    <article className="bg-asian-food flex h-[420px] flex-col justify-center gap-10 rounded-outer bg-cover bg-center bg-no-repeat px-4 md:px-10 xl:h-[520px]">
      <h1 className="text-background">Tjedan azijske kuhinje</h1>
      <h5 className="text-background">
        Istraži okuse Istoka – najbolji proizvodi azijske kuhinje na jednom mjestu.
      </h5>
      <Link
        href="/clanci/tjedan-azijske-kuhinje"
        className="w-fit rounded-inner bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-95 focus:outline-foreground"
      >
        Istraži ponudu
      </Link>
    </article>
  );
}
