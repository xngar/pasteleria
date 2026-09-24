import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Página no encontrada",
  description:
    "La página que buscas no existe o ha cambiado de sabor. Vuelve al inicio de Treato y encuentra tu capricho favorito.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF0E8] to-[#FFA8BF] text-[#2C1810] px-4 sm:px-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
        <p className="font-script text-[#FF2D7A] text-5xl sm:text-7xl leading-none">
          ¡Oops!
        </p>
        <h1 className="font-serif italic font-black text-[84px] sm:text-[120px] lg:text-[150px] leading-none tracking-tight select-none">
          404
        </h1>
        <div className="flex items-center justify-center gap-3 -mt-2">
          <span className="w-3 h-3 bg-[#A8E6CF] rounded-full" aria-hidden="true" />
          <span className="w-2 h-2 bg-[#FFB5A7] rounded-full" aria-hidden="true" />
          <span className="w-3 h-3 bg-[#F8A5C2] rounded-full" aria-hidden="true" />
          <span className="w-2 h-2 bg-[#FF2D7A] rounded-full" aria-hidden="true" />
        </div>
        <p className="font-serif italic text-2xl sm:text-3xl mt-6">
          Casi, pero esta página se nos <span className="text-[#FF2D7A]">derritió</span>.
        </p>
        <p className="text-[#5C4A3D] text-sm sm:text-base mt-3 max-w-md leading-relaxed">
          La dirección que buscas no existe o ha cambiado de sabor. Vuelve al inicio
          para seguir llenando de sonrisas tu día.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="bg-[#FF2D7A] hover:bg-[#e1276e] text-white font-extrabold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-150"
          >
            Volver al inicio
          </Link>
          <Link
            href="/faq"
            className="text-[#2C1810] hover:text-[#FF2D7A] font-semibold text-sm transition-colors duration-150"
          >
            Ir a preguntas frecuentes
          </Link>
        </div>
      </div>
    </main>
  );
}