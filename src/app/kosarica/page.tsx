import { getCart } from "@/lib/cartActions";
import GeneralError from "@/ui/icons/GeneralError";
import CartLocation from "@/ui/cart/CartLocation";
import CartItems from "@/ui/cart/CartItems";

export default async function Page() {
  const cart = await getCart();

  if (cart.error) {
    return <GeneralError />;
  }

  return (
    <>
      <CartItems />
      {cart.data.map((location, i) => (
        <div key={location.id} className="flex flex-col gap-5">
          <CartLocation location={location} />
          {i < cart.data.length - 1 ? <div className="border-t border-separator" /> : ""}
        </div>
      ))}
    </>
  );
}
