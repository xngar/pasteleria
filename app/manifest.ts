import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://treato.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Treato – Helados, postres y repostería a domicilio",
    short_name: "Treato",
    description:
      "Helados artesanales, postres, hamburguesas y batidos hechos a mano, entregados en frío a tu puerta.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF0E8",
    theme_color: "#FF2D7A",
    lang: "es",
    icons: [
      {
        src: `${SITE_URL}/icon`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${SITE_URL}/apple-icon`,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}