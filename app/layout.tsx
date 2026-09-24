import type { Metadata } from "next";
import { Inter, Nunito, Pacifico, Playfair_Display } from "next/font/google";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://treato.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Treato | Helados, postres y repostería a domicilio",
    template: "%s | Treato",
  },
  description:
    "Helados artesanales, postres, hamburguesas, batidos y snacks hechos a mano con reparto en frío a domicilio. Opciones veganas y sin lactosa. Pide tus caprichos en Treato.",
  keywords: [
    "helados",
    "pastelería",
    "postres a domicilio",
    "reparto de helados",
    "hamburguesas",
    "batidos",
    "repostería online",
    "Treato",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Treato",
    title: "Treato | Helados, postres y repostería a domicilio",
    description:
      "Helados artesanales, postres, hamburguesas, batidos y snacks hechos a mano con reparto en frío a domicilio. Opciones veganas y sin lactosa. Pide tus caprichos en Treato.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treato | Helados, postres y repostería a domicilio",
    description:
      "Helados artesanales, postres, hamburguesas, batidos y snacks hechos a mano con reparto en frío a domicilio. Opciones veganas y sin lactosa.",
  },
};

const LdJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "IceCreamShop",
      "@id": `${SITE_URL}/#organization`,
      name: "Treato",
      alternateName: "Treato – Helados, postres y repostería a domicilio",
      description:
        "Helados artesanales, postres, hamburguesas y batidos hechos a mano, con reparto en frío a domicilio.",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      image: `${SITE_URL}/opengraph-image`,
      priceRange: "€€",
      servesCuisine: ["Helados", "Postres", "Repostería", "Hamburguesas", "Batidos"],
      areaServed: {
        "@type": "Place",
        name: "España",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle del Postre, 12",
        addressLocality: "Madrid",
        postalCode: "28001",
        addressRegion: "Madrid",
        addressCountry: "ES",
      },
      telephone: "+34 910 000 000",
      email: "hola@treato.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "10:00",
          closes: "01:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/treato",
        "https://www.facebook.com/treato",
        "https://www.tiktok.com/@treato",
        "https://www.youtube.com/@treato",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Treato",
      url: SITE_URL,
      inLanguage: "es-ES",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`h-full ${inter.variable} ${nunito.variable} ${pacifico.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[#FFF0E8]">
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LdJson).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}