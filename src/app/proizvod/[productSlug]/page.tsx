import { getProductStores } from "@/lib/actions";
import ProductStore from "@/ui/product/ProductStore";
import GeneralError from "@/ui/icons/GeneralError";

type Params = {
  productSlug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { productSlug } = await params;

  const productStores = await getProductStores(productSlug);
  if (productStores.error) {
    return <GeneralError />;
  }

  return productStores.data.map((store) => (
    <ProductStore key={store.id} store={store} productSlug={productSlug} />
  ));
}
