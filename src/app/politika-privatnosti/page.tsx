export default function Page() {
  return (
    <main className="grid grid-cols-1 gap-y-5 px-4 md:px-10 lg:grid-cols-5 lg:gap-x-5">
      <div className="col-span-1" />
      <section className="col-span-3 flex flex-col gap-10">
        <div>
          <h3>Politika privatnosti</h3>
          <h6 className="text-caption">Posljednje ažuriranje: 2.6.2025</h6>
        </div>
        <p>
          Vaša privatnost nam je bitna. Prava Cijena poštuje vaša prava i privatnost. Ova politika
          objašnjava koje podatke koristimo i zašto.
        </p>

        <article className="flex flex-col gap-2">
          <h4>Koje podatke prikupljamo</h4>
          <p>Aplikacija može prikupljati sljedeće podatke:</p>

          <ol className="list-decimal space-y-4 pl-4">
            <li className="space-y-2">
              <p>Podaci koje korisnik daje dobrovoljno:</p>

              <ul className="list-disc space-y-2 pl-4">
                <li>E-mail adresa i lozinka prilikom registracije</li>
                <li>Kategorije i/ili proizvodi koje korisnik sprema ili pretražuje</li>
              </ul>
            </li>

            <li className="space-y-2">
              <p>Automatski prikupljeni podaci:</p>

              <ul className="list-disc space-y-2 pl-4">
                <li>
                  Informacije o korištenju aplikacije (npr. učestalost pretrage proizvoda,
                  najtraženije kategorije, vrijeme provedeno na pojedinim stranicama)
                </li>
                <li>Tehničke informacije poput tipa uređaja, operativnog sustava i IP adrese</li>
              </ul>
            </li>
          </ol>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Kako koristimo prikupljene podatke?</h4>
          <p>Podaci se koriste kako bismo:</p>

          <ul className="list-disc space-y-2 pl-4">
            <li>Omogućili osnovno funkcioniranje aplikacije</li>
            <li>Pružili personalizirano korisničko iskustvo</li>
            <li>Poboljšali kvalitetu i funkcionalnost aplikacije</li>
            <li>Spriječili zlouporabe i tehničke probleme</li>
          </ul>
          <p>
            Prikupljeni podaci mogu se obrađivati i u agregiranom obliku u svrhu boljeg
            razumijevanja potreba korisnika i tržišnih kretanja. Ti podaci ne omogućuju
            identifikaciju pojedinačnih korisnika.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Zašto prikupljamo navedene podatke?</h4>
          <p>
            Prethodno navedene podatke prikupljamo kako bismo vam mogli pružiti bolje i relevantnije
            korisničko iskustvo.
          </p>
          <p>Podaci nam omogućuju da:</p>
          <ul className="list-disc space-y-2 pl-4">
            <li>Omogućimo personalizirane funkcionalnosti i prikaz relevantnog sadržaja</li>
            <li>Analiziramo korištenje aplikacije</li>
            <li>Poboljšamo performanse, stabilnost i sigurnost aplikacije</li>
          </ul>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Korištenje kolačića i analitike</h4>
          <p>
            Prava Cijena koristi kolačiće (cookies) koji su nužni za ispravan rad stranice, poput
            autentifikacije korisnika i spremanja korisničkih postavki. Također koristimo alate za
            analitiku (npr. Google Analytics) radi praćenja korištenja stranice i ponašanja
            korisnika.
          </p>
          <p>
            Ti alati omogućuju uvid u podatke poput broja posjeta, trajanja sesije i najposjećenijih
            stranica. Podaci koji se prikupe u ovim alatima ne omogućuju identifikaciju korisnika.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Dijeljenje podataka s trećim stranama</h4>
          <p>Vaši podaci neće se dijeliti s trećim stranama osim u sljedećim slučajevima:</p>
          <ul className="list-disc space-y-2 pl-4">
            <li>
              Korištenje alata za komunikaciju ili analitiku (npr. email platformi, analitičkih
              sustava) koji obrađuju podatke isključivo u naše ime
            </li>
            <li>
              Agregirani i anonimizirani statistički podaci mogu se koristiti za izradu izvještaja i
              analiza koje se dijele s poslovnim partnerima
            </li>
            <li>Kada smo zakonski obavezni podijeliti podatke s nadležnim tijelima</li>
          </ul>
        </article>

        <article className="flex flex-col gap-2">
          <h4>Privola na pravila o privatnosti</h4>
          <p>
            Korištenjem stranica Prava Cijena i prihvaćanjem ovih pravila o privatnosti, dajete
            svoju privolu za obradu vaših podataka kako je navedeno gore u tekstu.
          </p>
        </article>
      </section>
    </main>
  );
}
