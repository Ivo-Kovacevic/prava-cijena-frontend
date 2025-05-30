import { getStoreLocations } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";

type Params = {
  productSlug: string;
  storeSlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { productSlug, storeSlug } = await params;

  const storeLocations = await getStoreLocations(productSlug, storeSlug);
  if (storeLocations.error) {
    return <GeneralError />;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-y-10 text-center">
        <h3>Cijena</h3>
        <h3>Adresa</h3>
        <h3>Grad</h3>
      </div>
      {storeLocations.data.map((storeLocation) => (
        <div className="grid grid-cols-3 gap-y-10 text-center" key={storeLocation.id}>
          <h4 className="text-primary">{storeLocation.locationProduct.latestPrice} €</h4>
          <p>{storeLocation.address}</p>
          <p>{storeLocation.city}</p>
        </div>
      ))}
    </div>
  );
}
