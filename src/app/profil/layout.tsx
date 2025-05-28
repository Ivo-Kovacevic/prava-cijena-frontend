import { ReactNode } from "react";
import { checkUser } from "@/lib/actions";
import GeneralError from "@/ui/icons/GeneralError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Logout } from "@/ui/profile/Logout";

export default async function Layout({ children }: { children: ReactNode }) {
  const result = await checkUser();
  if (result.error) {
    return <GeneralError />;
  }

  return (
    <main className="grid gap-5 px-4 pb-4 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <section className="col-span-1 h-fit w-full flex-col justify-start gap-5">
        <div className="flex items-center justify-between">
          <h3>Moj profil</h3>
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
        </div>
        <h4>{result.data.email}</h4>
        <Logout />
      </section>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4">
        {children}
      </section>
    </main>
  );
}
