import { getProduct, getProductStores } from "@/lib/actions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Params = {
  productSlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { productSlug } = await params;
  const product = await getProduct(productSlug);

  if (product.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  const productStores = await getProductStores(product.data.id);

  if (productStores.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  console.dir(productStores.data);

  return (
    <main className="grid gap-5 px-4 md:grid-cols-1 md:px-10 lg:grid-cols-5">
      <section className="col-span-1 flex flex-col gap-5">
        {product.data.imageUrl ? (
          <div className="relative flex h-[250px] items-center justify-center">
            <Image src={product.data.imageUrl} alt={product.data.name} width={200} height={200} />
          </div>
        ) : (
          <FontAwesomeIcon icon={faQuestion} className="m-auto text-8xl" />
        )}
        <h4>{product.data.name}</h4>
      </section>
      <section className="col-span-3 flex flex-col gap-5">
        {productStores.data.map((product) => (
          <article
            key={product.id}
            className="flex items-center justify-between rounded-outer border border-caption px-20 py-5"
          >
            <div>
              <h3>{product.latestPrice} €</h3>
            </div>
            <Link href={product.productUrl}>U trgovinu</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
