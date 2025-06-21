export interface ProcessedCookieData {
  cookieName: string;
  cookieValue: string;
  options: {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean | "lax" | "strict" | "none" | undefined;
  };
}
