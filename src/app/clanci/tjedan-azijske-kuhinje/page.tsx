import { getStaticSearchedProducts } from "@/lib/actions";
import Product from "@/ui/Product";
import GeneralError from "@/ui/icons/GeneralError";
import Link from "next/link";

export default async function Page() {
  const pagination = await getStaticSearchedProducts("sushi", 6);
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
          <h3>Tjedan azijske kuhinje</h3>
          <h6 className="text-caption">Wok, soja, curry i rižini rezanci – sad je vrijeme</h6>
        </div>

        <article className="flex flex-col gap-2">
          <h4>🍜 1. Brzi wok s piletinom i povrćem</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Rižini rezanci")}
            {ingredientLink("Pileći file")}
            {ingredientLink("Mješavina povrća")}
            {ingredientLink("Soja sos")}
            {ingredientLink("Sezamovo ulje")}
            {ingredientLink("Đumbir")}
            {ingredientLink("Chili")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Ne kuhaš – pržiš. Visoka temperatura, kratko vrijeme, sve
            hrskavo.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>🍛 2. Curry s kokosovim mlijekom</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Curry pasta")}
            {ingredientLink("Kokosovo mlijeko")}
            {ingredientLink("Tofu")}
            {ingredientLink("Tikvice")}
            {ingredientLink("Paprika")}
            {ingredientLink("Grašak")}
            {ingredientLink("Jasmin riža")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Ako je preblago – dodaj žlicu ribljeg umaka i malo limete.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>🍱 3. Sushi kod kuće? Može!</h4>
          <p>
            <strong>Treba ti:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {ingredientLink("Nori alge")}
            {ingredientLink("Sushi riža")}
            {ingredientLink("Rižin ocat")}
            {ingredientLink("Losos")}
            {ingredientLink("Dimljeni tofu")}
            {ingredientLink("Krastavac")}
            {ingredientLink("Avokado")}
            {ingredientLink("Krem sir")}
            {ingredientLink("Soja sos")}
            {ingredientLink("Wasabi")}
          </ul>
          <p>
            📌 <strong>Tip:</strong> Ne trebaš bambusovu prostirku – samo malo folije i dobra volja.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>🛒 Gdje sve to kupiti?</h4>
          <p>
            SPAR je ovih dana pravi raj za azijsku kuhinju – imaju proširenu ponudu proizvoda poput
            rižinih rezanaca, curry pasta, kokosovog mlijeka, pa čak i sushi seta za početnike.
          </p>
          <p>
            🔍 Pregledaj ponudu i otkrij sastojke koji ti trebaju – azijski tjedan ne traje vječno!
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
