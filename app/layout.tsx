import type { Metadata } from "next";
import { Inter, Playfair_Display, Nunito, Caveat, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["700"],
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Treato – Sweet • Savory • Smiles",
  description:
    "Treato – Your little treat starts here. Delicious bites, happy vibes, delivered fast to your door!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${nunito.variable} ${caveat.variable} ${pacifico.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[#FFF0E8]">{children}</body>
    </html>
  );
}
