import { ReactNode } from "react";
import { getStaticCategories } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";
import Svg from "@/ui/Svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import VerticalLine from "@/ui/VerticalLine";

interface Props {
  children: ReactNode;
}

export default async function SignInLayout({ children }: Props) {
  const categories = await getStaticCategories();

  if (categories.error) {
    return <GeneralError />;
  }

  return (
    <main className="m-auto mb-48 flex items-center gap-10 px-4 md:mt-28 md:px-10 2xl:gap-20">
      <section className="hidden max-w-screen-2xl flex-col items-center justify-center xl:flex">
        <div className="flex flex-col gap-5">
          <h1>Prati cijene omiljenih proizvoda</h1>
          <div className="flex gap-5">
            <div className="grid max-w-xl grid-cols-3 gap-4">
              {categories.data.slice(8, 12).map((category, i) => (
                <article
                  key={category.id}
                  className={`h-44 rounded-outer transition ${i == 0 || i == 3 ? "col-span-2" : "col-span-1"}`}
                  style={{ backgroundColor: `${category.hexColor}20` }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-outer p-10 text-center">
                    <Svg svgUrl={category.imageUrl} color={category.hexColor} size={96} />
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-col justify-around text-primary">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-3xl" />
                <h3>Spremi proizvode</h3>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-3xl" />
                <h3>Napravi popis za kupnju</h3>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-3xl" />
                <h3>Isplaniraj kupovinu</h3>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-3xl" />
                <h3>Primaj obavijesti</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VerticalLine className="hidden h-96 xl:block" />
      <section className="flex flex-col items-center justify-center">{children}</section>
    </main>
  );
}
