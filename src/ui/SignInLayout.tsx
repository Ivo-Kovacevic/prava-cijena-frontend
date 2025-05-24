import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function SignInLayout({ children }: Props) {
  return (
    <main className="mb-40 grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-2">
      <section className="hidden flex-col gap-5 lg:col-span-1 lg:flex"></section>
      <section className="col-span-1 flex flex-col gap-5">{children}</section>
    </main>
  );
}
