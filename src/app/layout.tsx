import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import { Geist, Playfair_Display, Cormorant_Garamond, Archivo_Black } from "next/font/google";


const bodyFont = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const specialFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
});

const stardustFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stardust",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "Faraz Tehrani",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${specialFont.variable} ${stardustFont.variable} ${archivoBlack.variable}`}
    >
      <body className="antialiased flex min-h-screen flex-col relative overflow-x-hidden">
        <MouseGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
