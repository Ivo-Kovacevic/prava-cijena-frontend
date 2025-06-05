import { getStaticSearchedProducts } from "@/lib/actions";
import Product from "@/ui/Product";
import GeneralError from "@/ui/icons/GeneralError";
import Link from "next/link";

export default async function Page() {
  const pagination = await getStaticSearchedProducts("dukat dukatos", 6);
  if (pagination.error) {
    return <GeneralError />;
  }

  const ingredientLink = (ingredient: string) => (
    <li>
      <Link href={`/pretraga?izraz=${encodeURIComponent(ingredient)}`} className="hover:underline">
        {ingredient}
      </Link>
    </li>
  );

  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <div className="col-span-1" />
      <section className="col-span-3 flex flex-col gap-10">
        <div>
          <h3>Napravi svoj doručak</h3>
          <h6 className="text-caption">Brze ideje za jutra kad ti se ništa ne da</h6>
        </div>

        <article className="flex flex-col gap-2">
          <h4>🥣 1. Zobena kaša koja nije dosadna</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Zobene pahuljice")}
            {ingredientLink("Mlijeko")}
            {ingredientLink("Biljni napitak")}
            {ingredientLink("Banana")}
            {ingredientLink("Borovnice")}
            {ingredientLink("Jagode")}
            {ingredientLink("Maslac od kikirikija")}
            {ingredientLink("Maslac od badema")}
            {ingredientLink("Med")}
            {ingredientLink("Cimet")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Ostavi u frižideru preko noći i uštedi si vrijeme ujutro.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>🍳 2. Tost + jaja = doručak koji uvijek prolazi</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Svježa jaja")}
            {ingredientLink("Integralni kruh")}
            {ingredientLink("Tost")}
            {ingredientLink("Ciabatta")}
            {ingredientLink("Avokado")}
            {ingredientLink("Sir")}
            {ingredientLink("Rajčica")}
            {ingredientLink("Maslinovo ulje")}
            {ingredientLink("Sol")}
            {ingredientLink("Papar")}
            {ingredientLink("Chili")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Jaja na oko + avokado na tostu = doručak koji izgleda fensi, a
            gotov je za 5 minuta.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>🍓 3. Grčki jogurt, ali kao desert</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Grčki jogurt")}
            {ingredientLink("Proteinski jogurt")}
            {ingredientLink("Voće")}
            {ingredientLink("Med")}
            {ingredientLink("Orašasti plodovi")}
            {ingredientLink("Granola")}
            {ingredientLink("Cimet")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Posluži u staklenci, dodaj malo cimeta – doručak ti odjednom
            izgleda kao Instagram post.
          </p>
        </article>

        <div className="flex flex-col gap-2">
          <h4>Potrebni proizvodi</h4>
          <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
            {pagination.data.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
