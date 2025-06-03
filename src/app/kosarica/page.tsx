import { getCart } from "@/lib/cartActions";
import GeneralError from "@/ui/icons/GeneralError";
import CartClient from "@/ui/cart/CartClient";

export default async function Page() {
  const cart = await getCart();
  if (cart.error) {
    return <GeneralError />;
  }

  return <CartClient storeLocations={cart.data} />;
}
