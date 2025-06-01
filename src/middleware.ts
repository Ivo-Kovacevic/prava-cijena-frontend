// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Define your routes
const GUEST_ONLY_ROUTES = ["/prijava", "/registracija"];
const PROTECTED_ROUTES = ["/profil", "/kosarica"];
const HOME_ROUTE = "/";
const LOGIN_ROUTE = "/prijava";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("jwtToken");
  const isAuthenticated = !!(tokenCookie && tokenCookie.value);

  console.log(`Middleware: Path: ${pathname}, IsAuthenticated: ${isAuthenticated}`);

  // User is authenticated and trying to access a guest-only route (/prijava, /registracija)
  if (isAuthenticated && GUEST_ONLY_ROUTES.includes(pathname)) {
    console.log(
      `Middleware: Authenticated user trying to access guest route ${pathname}. Redirecting to ${HOME_ROUTE}.`,
    );
    return NextResponse.redirect(new URL(HOME_ROUTE, request.url));
  }

  // User is not authenticated and trying to access a protected route (/profil, /kosarica)
  if (!isAuthenticated && PROTECTED_ROUTES.includes(pathname)) {
    console.log(
      `Middleware: Unauthenticated user trying to access protected route ${pathname}. Redirecting to ${LOGIN_ROUTE}.`,
    );
    return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/prijava", "/registracija", "/profil", "/kosarica"],
};
