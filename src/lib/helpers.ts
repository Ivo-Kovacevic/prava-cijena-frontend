export function getTrgovinaForm(n: number): string {
  const lastTwo = n % 100;
  const last = n % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return "trgovina";
  if (last === 1) return "trgovina";
  if (last >= 2 && last <= 4) return "trgovine";
  return "trgovina";
}
