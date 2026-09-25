import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre el reparto en frío de Treato: tiempos de entrega, zonas de reparto, opciones veganas y sin lactosa, pedidos con antelación, fidelidad, pagos y devoluciones.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Preguntas frecuentes | Treato",
    description:
      "Reparto en frío, opciones veganas, fidelidad, pagos y devoluciones: todas las respuestas sobre Treato en un solo sitio.",
    url: "/faq",
    siteName: "Treato",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas frecuentes | Treato",
    description:
      "Tiempos de reparto, zonas, opciones veganas, fidelidad y pagos: todas las respuestas sobre Treato en un solo sitio.",
  },
};

const faqs = [
  {
    question: "¿Cuánto tarda el reparto a domicilio?",
    answer:
      "Trabajamos para que tu pedido llegue en unos 30-45 minutos. Mientras tanto, tus caprichos viajan protegidos en nuestro reparto en frío para llegar perfectos a tu puerta.",
  },
  {
    question: "¿Qué zonas de reparto cubre Treato?",
    answer:
      "Repartimos a domicilio en nuestras zonas de reparto en frío. Puedes consultar la disponibilidad al introducir tu código postal al hacer el pedido.",
  },
  {
    question: "¿Tenéis opciones veganas y sin lactosa?",
    answer:
      "Sí. Disponemos de helados y postres veganos y sin lactosa elaborados con ingredientes reales. Búscalos dentro del menú con sus etiquetas correspondientes.",
  },
  {
    question: "¿Se pueden hacer pedidos con antelación o para eventos?",
    answer:
      "Sí, puedes planificar tus caprichos. Contacta con nosotros para tartas personalizadas, combos para celebraciones o pedidos grandes con antelación.",
  },
  {
    question: "¿Cómo funciona el programa de fidelidad?",
    answer:
      "Ganas puntos en cada pedido y los intercambias por premios deliciosos. Únete gratis y desbloquea recompensas con cada bolita que te lleve Treato.",
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer:
      "Aceptamos tarjeta de crédito y débito y otros métodos de pago online. Todo es seguro y sencillo: tú eliges el más cómodo al finalizar el pedido.",
  },
  {
    question: "¿Cómo mantenéis los helados fríos durante el reparto?",
    answer:
      "Usamos bolsas y contenedores isotérmicos con acumuladores de frío para que helados, postres y batidos lleguen en perfecto estado, de la heladería a tu puerta.",
  },
  {
    question: "¿Puedo devolver o cambiar un pedido?",
    answer:
      "Si algo no sale como esperabas, escríbenos y lo resolvemos. Revisa nuestra política de devoluciones o contacta con nosotros para gestionar tu caso.",
  },
  {
    question: "¿Usáis cookies en esta web?",
    answer:
      "Sí, utilizamos cookies propias y de terceros para mejorar la experiencia y analizar el tráfico. Puedes aceptarlas o limitarte a las esenciales desde el aviso de cookies.",
  },
];

const faqLdJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FDF0D5]">
      <div className="bg-[#003049] text-white px-4 sm:px-6 pt-16 pb-10">
        <div className="container mx-auto max-w-3xl">
          <p className="text-[#C1121F] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            Ayuda
          </p>
          <h1 className="font-serif italic font-extrabold text-3xl sm:text-4xl leading-tight">
            Preguntas frecuentes
          </h1>
          <p className="text-[#8fb0c4] text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            Resolvemos tus dudas más golosas. ¿No encuentras la respuesta?
            <span> </span>
            <Link href="#" className="text-[#C1121F] hover:underline font-semibold">
              Contáctanos
            </Link>
            .
          </p>

          <div className="mt-6 bg-white/10 ring-1 ring-white/15 rounded-2xl p-4">
            <p className="text-[#C1121F] text-[11px] font-extrabold uppercase tracking-[0.25em] mb-3">
              En resumen
            </p>
            <ul className="space-y-2 text-sm text-[#d9e4ec]">
              {[
                "Reparto en frío a domicilio en unos 30-45 minutos.",
                "Opciones veganas y sin lactosa en helados y postres.",
                "Tartas y combos para eventos preparados con antelación.",
                "Programa de fidelidad gratuito: ganas puntos en cada pedido.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-[#C1121F] rounded-full flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                id={
                  index === 0
                    ? "reparto"
                    : index === faqs.length - 2
                      ? "devoluciones"
                      : index === faqs.length - 1
                        ? "cookies"
                        : undefined
                }
                open={index === 0}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden ring-1 ring-[#003049]/5 scroll-mt-24"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none selection:bg-transparent">
                  <span className="text-[#003049] font-bold text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#C1121F] text-white flex items-center justify-center text-lg font-bold transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[#4a6a80] text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div id="contacto" className="mt-10 bg-white/60 rounded-2xl p-6 text-center scroll-mt-24">
            <p className="text-[#003049] font-extrabold text-lg font-serif italic">
              ¿Sigues con dudas? 💭
            </p>
            <p className="text-[#4a6a80] text-sm mt-1">
              Escríbenos y te ayudamos a llenar tu pedido de sonrisas.
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLdJson).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}