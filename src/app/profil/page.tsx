import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShop } from "@fortawesome/free-solid-svg-icons";
import Product from "@/ui/Product";
import { getSavedProducts } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";

export default async function Page() {
  const savedProducts = await getSavedProducts();
  const savedStores = await getSavedProducts();

  if (savedProducts.error || savedStores.error) {
    return <GeneralError />;
  }

  return (
    <>
      <div className="col-span-full flex flex-col gap-5">
        <div className="flex justify-between">
          <h3>Omiljeni proizvodi</h3>
          <FontAwesomeIcon icon={faHeart} className="text-2xl" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {savedProducts.data.length > 0 ? (
            savedProducts.data.map((savedProduct) => (
              <Product key={savedProduct.id} product={savedProduct} />
            ))
          ) : (
            <div className="col-span-full flex h-[390px] items-center justify-center text-caption">
              Nema omiljenih proizvoda
            </div>
          )}
        </div>
      </div>

      <div className="col-span-full flex flex-col gap-5">
        <div className="flex justify-between">
          <h3>Spremljene trgovine</h3>
          <FontAwesomeIcon icon={faShop} className="text-2xl" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {savedStores.data.length > 0 ? (
            savedStores.data.map((savedProduct) => (
              <Product key={savedProduct.id} product={savedProduct} />
            ))
          ) : (
            <div className="col-span-full flex h-[390px] items-center justify-center text-caption">
              Nema spremljenih trgovina
            </div>
          )}
        </div>
      </div>
    </>
  );
}
