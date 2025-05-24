import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h3>Prijavi se</h3>
      <form action="" className="flex flex-col gap-5">
        <div>
          <h5 className="text-caption">Email</h5>
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-inner border border-caption p-2 text-[1.125rem] md:text-[1.25rem]"
          />
        </div>

        <div>
          <h5 className="text-caption">Lozinka</h5>
          <input
            type="password"
            placeholder="Lozinka"
            className="w-full rounded-inner border border-caption p-2 text-[1.125rem] md:text-[1.25rem]"
          />
        </div>

        <button className="rounded-xl bg-primary px-8 py-4 text-background shadow-md transition hover:brightness-90">
          Prijavi se
        </button>
      </form>

      <div className="flex gap-2">
        <span className="text-caption">Nemate račun?</span>
        <Link
          href="/registracija"
          className="text-caption underline transition hover:text-foreground"
        >
          Registrirajte se
        </Link>
      </div>
    </>
  );
}
