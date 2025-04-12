import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { poppins } from "@/ui/fonts";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Prava Cijena",
  description: "Pronađi i usporedi cijene namirnica iz više trgovina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen flex-col justify-between gap-14 antialiased md:gap-10`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
