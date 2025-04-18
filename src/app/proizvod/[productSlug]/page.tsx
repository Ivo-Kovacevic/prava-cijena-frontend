import { getProduct } from "@/lib/actions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

type Params = {
  productSlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { productSlug } = await params;
  const product = await getProduct(productSlug);
  if (product.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  // const productStores = await getProductStores(product.data.id);
  // if (productStores.error) {
  //   return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  // }

  return (
    <main className="grid grid-cols-1 gap-5 px-4 md:px-10 lg:grid-cols-5">
      <section className="col-span-1 flex w-full flex-col gap-5">
        {product.data.imageUrl ? (
          <div className="flex h-[250px] w-full items-center justify-center">
            <Image src={product.data.imageUrl} alt={product.data.name} width={200} height={200} />
          </div>
        ) : (
          <FontAwesomeIcon icon={faQuestion} className="m-auto text-8xl" />
        )}
        <h4>{product.data.name}</h4>
      </section>
      <section className="col-span-3 flex flex-col gap-5">
        {product.data.productStores.map((product) => (
          <article
            key={product.id}
            className="grid h-[225px] grid-cols-2 rounded-outer border border-caption px-5 py-5 lg:grid-cols-3 lg:px-8 xl:px-14 2xl:px-20"
          >
            <div className="col-span-1 flex flex-col items-center justify-around lg:col-span-2 lg:flex-row">
              <a
                href={product.store.storeUrl}
                target="_blank"
                className="flex flex-1 items-center justify-center"
              >
                <Image
                  src={product.store.imageUrl}
                  alt={product.store.name}
                  width={250}
                  height={200}
                />
              </a>
              <div className="flex flex-1 items-center justify-center">
                <h2>{product.latestPrice} €</h2>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                href={product.productUrl}
                target="_blank"
                className="mr-0 h-[50px] w-full rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-center transition hover:bg-opacity-30"
              >
                <h6>U trgovinu</h6>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
