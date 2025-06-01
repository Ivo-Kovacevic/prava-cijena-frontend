import { getCart } from "@/lib/cartActions";
import GeneralError from "@/ui/icons/GeneralError";
import Image from "next/image";

export default async function Page() {
  const cart = await getCart();
  if (cart.error) {
    return <GeneralError />;
  }

  return (
    <>
      <h4>12 proizvoda</h4>
      {cart.data.map((location, i) => (
        <>
          <div key={location.id} className="mx-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src={location.store.imageUrl}
                alt={location.store.name}
                width={60}
                height={60}
                className="aspect-square h-[60px] object-contain"
              />
              <h5>
                {location.city}, {location.address}
              </h5>
              <h4 className="ml-auto rounded-lg bg-lime-800 bg-opacity-20 px-6 py-3 text-primary">
                {location.locationProducts.reduce((sum, p) => sum + p.latestPrice, 0).toFixed(2)} €
              </h4>
            </div>
            <div className="flex flex-col gap-5">
              {location.locationProducts.map((productStore) => (
                <div key={productStore.product.id} className="flex gap-4">
                  <Image
                    src={
                      productStore.product.imageUrl
                        ? productStore.product.imageUrl
                        : "https://res.cloudinary.com/dqbe0apqn/image/upload/unknown.png"
                    }
                    alt={productStore.product.name}
                    width={80}
                    height={80}
                    className="aspect-square h-[80px] object-contain drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
                  />
                  <div className="flex flex-col justify-center">
                    <h5>{productStore.product.name}</h5>
                    <h4 className="text-primary">{productStore.latestPrice} €</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {i < cart.data.length - 1 ? <div className="border-t border-separator" /> : ""}
        </>
      ))}
    </>
  );
}
