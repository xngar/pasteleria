import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Página no encontrada",
  description:
    "La página que buscas no existe o ha cambiado de sabor. Vuelve al inicio de Treato y encuentra tu capricho favorito.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#FDF0D5] to-[#C3D6E2] text-[#003049] px-4 sm:px-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
        <p className="font-script text-[#C1121F] text-5xl sm:text-7xl leading-none">
          ¡Oops!
        </p>
        <h1 className="font-serif italic font-black text-[84px] sm:text-[120px] lg:text-[150px] leading-none tracking-tight select-none">
          404
        </h1>
        <div className="flex items-center justify-center gap-3 -mt-2">
          <span className="w-3 h-3 bg-[#669bbc] rounded-full" aria-hidden="true" />
          <span className="w-2 h-2 bg-[#E8A6A9] rounded-full" aria-hidden="true" />
          <span className="w-3 h-3 bg-[#C1121F] rounded-full" aria-hidden="true" />
          <span className="w-2 h-2 bg-[#C1121F] rounded-full" aria-hidden="true" />
        </div>
        <p className="font-serif italic text-2xl sm:text-3xl mt-6">
          Casi, pero esta página se nos <span className="text-[#C1121F]">derritió</span>.
        </p>
        <p className="text-[#4A6A80] text-sm sm:text-base mt-3 max-w-md leading-relaxed">
          La dirección que buscas no existe o ha cambiado de sabor. Vuelve al inicio
          para seguir llenando de sonrisas tu día.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="bg-[#C1121F] hover:bg-[#780000] text-white font-extrabold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-150"
          >
            Volver al inicio
          </Link>
          <Link
            href="/faq"
            className="text-[#003049] hover:text-[#C1121F] font-semibold text-sm transition-colors duration-150"
          >
            Ir a preguntas frecuentes
          </Link>
        </div>
      </div>
    </main>
  );
}