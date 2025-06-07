import { ReactNode } from "react";
import { checkUser } from "@/lib/actions";
import { redirect } from "next/navigation";
import GeneralError from "@/ui/icons/GeneralError";

export default async function Layout({ children }: { children: ReactNode }) {
  const result = await checkUser();
  if (result.error) {
    if (result.error === "Unauthorized") {
      redirect("/prijava");
    } else {
      return <GeneralError />;
    }
  }

  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <section className="relative col-span-1 h-full w-full flex-col">
        <h3>Pametna košarica</h3>
      </section>
      <section className="col-span-3 flex min-h-[500px] flex-col gap-5">{children}</section>
    </main>
  );
}
