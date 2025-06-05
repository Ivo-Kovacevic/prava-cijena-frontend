import Link from "next/link";
import dummyProductStores from "@/const/dummyProductStores";
import StaticProductStore from "@/ui/product/StaticProductStore";

export default function InfoArticle() {
  return (
    <article className="flex h-[420px] items-center gap-5 xl:h-[520px]">
      <div className="flex w-full flex-col gap-5 xl:w-1/2">
        <h1 className="bg-gradient-to-r from-lime-800 to-lime-600 bg-clip-text text-transparent">
          Pronađi sve cijene
          <br />
          na jednom mjestu
        </h1>
        <h5>
          Naša platforma omogućuje praćenje cijena proizvoda iz različitih trgovina, pomažući ti da
          uvijek pronađeš najbolju ponudu.
        </h5>
        <div>
          <Link
            href="/kategorije"
            className="block w-fit rounded-xl bg-gradient-to-r from-lime-800 to-lime-600 px-8 py-4 text-background shadow-md transition hover:brightness-95 focus:outline-foreground"
          >
            Počni pretraživati
          </Link>
        </div>
      </div>
      <div className="hidden flex-col gap-5 xl:flex xl:w-1/2">
        {dummyProductStores.map((store) => (
          <StaticProductStore key={store.id} store={store} />
        ))}
      </div>
    </article>
  );
}
