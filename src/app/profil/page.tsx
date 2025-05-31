import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShop } from "@fortawesome/free-solid-svg-icons";
import GeneralError from "@/ui/icons/GeneralError";
import SaveStoreForm from "@/ui/SaveStoreForm";
import { getSavedStores } from "@/lib/savedStoresActions";
import StoreList from "@/ui/store/StoreList";
import { getSavedProducts } from "@/lib/savedProductsActions";
import SavedProductList from "@/ui/product/SavedProductList";

export default async function Page() {
  const savedProducts = await getSavedProducts();
  const savedStores = await getSavedStores();

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
          <SavedProductList products={savedProducts.data} />
        </div>
      </div>

      <div className="col-span-full flex flex-col gap-5">
        <div className="flex justify-between">
          <h3>Spremljene trgovine</h3>
          <FontAwesomeIcon icon={faShop} className="text-2xl" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <StoreList storeLocations={savedStores.data} />
          <SaveStoreForm />
        </div>
      </div>
    </>
  );
}
