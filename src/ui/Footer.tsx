export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-20 bg-primary px-10 py-20 text-background md:flex-row mt-auto">
      <article className="flex flex-col gap-4">
        <h3>Informacije</h3>
        <p>Kontakt</p>
        <p>Oglašavanje</p>
      </article>
      <article className="flex flex-col gap-4">
        <h3>Aplikacija</h3>
        <p>Preuzmi na Google Play</p>
        <p>Preuzmi na App Store</p>
      </article>
      <article className="flex flex-col gap-4">
        <h3>PravaCijena © 2025</h3>
      </article>
    </footer>
  );
}
