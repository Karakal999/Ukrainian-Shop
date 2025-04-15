import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import Navigation from "./components/Navigation";
import FloatingCart from "./components/FloatingCart";
import ThemeProvider from "./components/ThemeProvider";
import { nunito } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ukrainian Shop",
  description: "Traditional Ukrainian Clothing Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <Navigation />
              <main>{children}</main>
              <FloatingCart />
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
