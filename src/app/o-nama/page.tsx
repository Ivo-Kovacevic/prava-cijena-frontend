export default function Page() {
  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <div className="col-span-1" />
      <section className="col-span-3 flex flex-col gap-10">
        <h3>O nama</h3>
        <p>
          Prava Cijena je nastala iz jednostavne ideje — zašto trošiti vrijeme i novac lutajući po
          trgovinama, kad sve informacije o cijenama mogu biti dostupne na jednom mjestu? Naša
          platforma korisnicima omogućuje da brzo usporede cijene svakodnevnih proizvoda iz raznih
          trgovina i donesu pametnije odluke pri kupnji.
        </p>

        <article className="flex flex-col gap-2">
          <h4>Vizija</h4>
          <p>Postati vodeca platofrma za uspordebu cijena i organizaciju kupovine u Hrvatskoj</p>
          <p>
            Vjerujemo u transparentno tržište i želimo pomoći svakom kućanstvu da kupuje pametnije,
            bez stresa i nepotrebnih troškova.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Misija</h4>
          <p>
            Transformirati svakodnevnu kupovinu pruzajuci korisnicima moc da u nekoliko klikova
            pronadu najpovoljnije ponude te isplaniraju kupovinu
          </p>
          <p>
            Kroz točne podatke, jednostavno sučelje i stalno ažurirane cijene, želimo postati
            nezamjenjiv alat za svakodnevnu kupovinu.
          </p>
        </article>
      </section>
    </main>
  );
}
