import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/header/Header";
import Footer from "@/ui/Footer";
import { poppins } from "@/ui/fonts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthProvider } from "@/context/authContext";
import { UserProvider } from "@/context/userContext";
import { NotificationProvider } from "@/context/notificationContext";
import Notification from "@/ui/notification/Notification";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Prava Cijena",
  description: "Pronađi i usporedi cijene namirnica iz više trgovina",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col gap-6 md:gap-10`}>
        <NotificationProvider>
          <AuthProvider>
            <UserProvider>
              <Header />
              {children}
              <Footer />

              <Notification />
            </UserProvider>
          </AuthProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
