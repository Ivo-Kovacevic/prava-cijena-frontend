import { StoreType } from "@/@types/api-types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowTrendUp, faShop } from "@fortawesome/free-solid-svg-icons";

export default function StaticProductStore({ store }: { store: StoreType }) {
  return (
    <article
      key={store.id}
      className="grid h-[225px] grid-cols-2 gap-5 rounded-outer border border-caption px-5 py-5 hover:cursor-default lg:grid-cols-3 lg:px-8 xl:px-14 2xl:px-20"
    >
      <div className="col-span-1 flex flex-col items-center justify-around lg:col-span-2 lg:flex-row">
        <p className="relative flex h-full w-full max-w-[250px] flex-1 items-center justify-center">
          <Image src={store.imageUrl} alt={store.name} fill={true} className="object-contain" />
        </p>
        <div className="flex flex-1 items-center justify-center text-primary">
          <h2 className="pl-5">
            <p className="group flex items-center gap-2">
              {" "}
              {store.price} €
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl transition group-hover:translate-x-1"
              />
            </p>
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-5">
        <h6 className="flex w-max items-center gap-2 transition hover:text-primary">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-xl" />
          <div>Povijest cijene</div>
        </h6>
        <h6 className="flex items-center gap-2 transition hover:text-primary">
          <FontAwesomeIcon icon={faShop} />
          <div>U trgovinu</div>
        </h6>
      </div>
    </article>
  );
}
