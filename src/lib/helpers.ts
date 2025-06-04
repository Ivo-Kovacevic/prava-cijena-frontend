export function getTrgovinaForm(n: number): string {
  const lastTwo = n % 100;
  const last = n % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return "trgovina";
  if (last === 1) return "trgovina";
  if (last >= 2 && last <= 4) return "trgovine";
  return "trgovina";
}

export function getProizvodForm(n: number): string {
  const lastTwo = n % 100;
  const last = n % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return "proizvoda";
  if (last === 1) return "proizvod";
  return "proizvoda";
}

export const categoryOrder = [
  "Osnovne namirnice",
  "Priprema jela",
  "Mliječni proizvodi i jaja",
  "Voće i povrće",
  "Mesni proizvodi",
  "Pekarnica",
  "Gotova jela",
  "Grickalice i slatkiši",
  "Smrznuta hrana",
  "Pića",
  "Kava i čaj",
  "Njega i higijena",
  "Sredstva za pranje i čišćenje",
  "Ostale namirnice i proizvodi",
];
