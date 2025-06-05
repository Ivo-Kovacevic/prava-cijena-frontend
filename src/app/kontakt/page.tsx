export default function Page() {
  return (
    <main className="mb-[340px] grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <div className="col-span-1" />
      <section className="col-span-3 flex flex-col gap-10">
        <h3>Kontakt</h3>
        <p>
          Za sve nas upite možete kontaktirati putem e-mail adrese:{" "}
          <a
            href="mailto:info@pravacijena.eu"
            className="font-bold hover:underline focus:outline-background"
          >
            info@pravacijena.eu
          </a>
        </p>
      </section>
    </main>
  );
}
