import { parse } from "cookie";
import { ProcessedCookieData } from "@/@types/types";

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

export function toBool(val: unknown) {
  return val?.toString().toLowerCase() === "true";
}

export function toSameSite(val: unknown) {
  if (val === "lax" || val === "strict" || val === "none") {
    return val;
  }
}

export function getSetCookies(cookies: string[]) {
  const processedCookies: ProcessedCookieData[] = [];

  if (cookies && cookies.length > 0) {
    cookies.forEach((cookieString) => {
      const parsedCookie = parse(cookieString);
      const [cookieName, cookieValue] = Object.entries(parsedCookie)[0];

      if (cookieName && cookieValue) {
        const options: {
          path?: string;
          expires?: Date;
          maxAge?: number;
          domain?: string;
          secure?: boolean;
          httpOnly?: boolean;
          sameSite?: "lax" | "strict" | "none" | boolean;
        } = {};

        if (parsedCookie.Path) options.path = parsedCookie.Path;
        if (parsedCookie.Expires) options.expires = new Date(parsedCookie.Expires);
        if (parsedCookie["Max-Age"]) options.maxAge = parseInt(parsedCookie["Max-Age"], 10);
        if (parsedCookie.Domain) options.domain = parsedCookie.Domain;
        if (parsedCookie.SameSite) options.sameSite = toSameSite(parsedCookie.SameSite);
        options.httpOnly = true;
        options.secure = true;

        processedCookies.push({ cookieName, cookieValue, options });
      }
    });
  }
  return processedCookies;
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
