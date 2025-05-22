import { getStoreLocations } from "@/lib/actions";

type Params = {
  productSlug: string;
  storeSlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { productSlug, storeSlug } = await params;

  const storeLocations = await getStoreLocations(productSlug, storeSlug);
  if (storeLocations.error) {
    return <h1 className="text-center">Greška pri dohvaćanju podataka.</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-y-10 text-center">
      <h3>Cijena</h3>
      <h3>Adresa</h3>
      <h3>Grad</h3>
      {storeLocations.data.map((storeLocation) => (
        <>
          <h4 className="text-primary">{storeLocation.locationProduct.latestPrice} €</h4>
          <p>{storeLocation.address}</p>
          <p>{storeLocation.city}</p>
        </>
      ))}
    </div>
  );
}
