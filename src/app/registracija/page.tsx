import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <h3>Registriraj se</h3>
      <form action="" className="flex w-full flex-col gap-5">
        <div>
          <h5 className="text-caption">Email</h5>
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
          />
        </div>

        <div>
          <h5 className="text-caption">Lozinka</h5>
          <input
            type="password"
            placeholder="Lozinka"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
          />
        </div>

        <div>
          <h5 className="text-caption">Ponovite lozinku</h5>
          <input
            type="password"
            placeholder="Lozinka"
            className="w-full rounded-inner border border-caption bg-background p-2 text-[1.125rem] focus:outline-1 md:text-[1.25rem]"
          />
        </div>

        <button className="rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-90 focus:outline-foreground">
          Registriraj se
        </button>
      </form>

      <div className="flex gap-2">
        <span className="text-caption">Imate račun?</span>
        <Link href="/prijava" className="text-caption underline transition hover:text-foreground">
          Prijavite se
        </Link>
      </div>
    </div>
  );
}
