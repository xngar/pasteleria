"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", update);
    const raf = requestAnimationFrame(() => {
      setReduceMotion(mq.matches);
      setMounted(true);
    });
    return () => {
      mq.removeEventListener("change", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  const transitionClass = reduceMotion
    ? "transition-none"
    : "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

  const staggerDelay = (index: number) => (reduceMotion ? 0 : index * 100);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--cream)] select-none flex flex-col min-h-svh scroll-mt-0"
      style={{
        "--cream": "#FDF0D5",
        "--mint": "#A9C4D6",
        "--peach": "#F3D9C4",
        "--rose": "#E8A6A9",
        "--chocolate": "#003049",
        "--chocolate-light": "#4A6A80",
        "--cherry": "#C1121F",
        "--cherry-soft": "#F0C9C6",
      } as React.CSSProperties}
      aria-labelledby="hero-title"
    >
      {/* Full-bleed food background - aligned to the right */}
      <div className="absolute inset-0 z-[1] pointer-events-none" role="presentation">
        <Image
          src="/hero-dulces-y-helados-treato.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
        {/* Readability overlays: heavy cream over the text side, transparent over the photo side */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF0D5] via-[#FDF0D5]/80 to-[#FDF0D5] lg:bg-gradient-to-r lg:from-[#FDF0D5] lg:via-[#FDF0D5]/88 lg:to-[#FDF0D5]/10" />
        {/* Bottom fade into the wave */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FDF0D5]/95 to-transparent" />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[3] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Floating flavor badges over the photo (desktop) */}
      {/* <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-3 pointer-events-none" aria-hidden="true">
        <span className="bg-white/90 backdrop-blur-sm text-[var(--chocolate)] text-sm font-bold px-4 py-2 rounded-full shadow-lg ring-1 ring-[var(--cream)] rotate-[4deg]">
          Remolino de fresa
        </span>
        <span className="bg-white/90 backdrop-blur-sm text-[var(--chocolate)] text-sm font-bold px-4 py-2 rounded-full shadow-lg ring-1 ring-[var(--cream)] -rotate-3">
          Menta con pepitas
        </span>
        <span className="bg-white/90 backdrop-blur-sm text-[var(--chocolate)] text-sm font-bold px-4 py-2 rounded-full shadow-lg ring-1 ring-[var(--cream)] rotate-2">
          Caramelo salado
        </span>
        <span className="bg-white/90 backdrop-blur-sm text-[var(--chocolate)] text-sm font-bold px-4 py-2 rounded-full shadow-lg ring-1 ring-[var(--cream)] -rotate-2">
          Vainilla
        </span>
      </div> */}

      {/* Decorative sprinkles / confetti - subtle, friendly */}
      <div className="absolute top-16 right-12 flex items-center gap-1.5 opacity-70 pointer-events-none hidden md:flex z-10" aria-hidden="true">
        <span className="w-2 h-2 bg-[var(--mint)] rounded-full" />
        <span className="w-1.5 h-1.5 bg-[var(--rose)] rounded-full" />
        <span className="w-2 h-2 bg-[var(--peach)] rounded-full" />
        <span className="w-1.5 h-1.5 bg-[var(--cherry)] rounded-full" />
      </div>

      <div className="absolute bottom-24 left-16 flex items-center gap-1 opacity-60 pointer-events-none hidden lg:flex z-10" aria-hidden="true">
        <span className="w-1.5 h-1.5 bg-[var(--mint)] rounded-full" />
        <span className="w-2 h-2 bg-[var(--peach)] rounded-full" />
        <span className="w-1.5 h-1.5 bg-[var(--rose)] rounded-full" />
      </div>

      {/* Main Container - centered in the viewport, clear of the navbar */}
      <div className="container mx-auto max-w-[72rem] px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
        <div className="flex flex-col items-center lg:items-start justify-center w-full">
          {/* Typography & CTA - over the image, visible on the cream side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl z-20 w-full mx-auto lg:mx-0">
            {/* Headline Group - big, impactful, but fits on screen */}
            <div className="flex flex-col items-center lg:items-start justify-center gap-0.5 mb-4">
              {/* Eyebrow badge - friendly signal */}
              <div
                className={`${transitionClass} mb-2.5 flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[var(--cherry)] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full ring-1 ring-[var(--rose)]/40 shadow-sm`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${staggerDelay(0)}ms`,
                }}
              >
                <span aria-hidden="true">✦</span>
                Bola a mano y fresca a diario
              </div>

              {/* Line 1 - script */}
              <div
                className={`${transitionClass} transform origin-center`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${staggerDelay(1)}ms`,
                }}
              >
                <h1
                  id="hero-title"
                  className="font-script text-[var(--cherry)] text-[36px] sm:text-5xl md:text-[58px] lg:text-[66px] xl:text-[74px] leading-[1.08] tracking-wide drop-shadow-[0_2px_10px_rgba(214,64,69,0.28)] text-center lg:text-left"
                >
                  Aquí, la felicidad
                </h1>
              </div>

              {/* Line 2 - the big anchor word "MELTS" */}
              <div
                className={`${transitionClass} relative inline-block`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(24px) scale(0.97)",
                  transitionDelay: `${staggerDelay(2)}ms`,
                }}
              >
                <span className="text-[var(--chocolate)] font-black italic text-[54px] sm:text-[76px] md:text-[92px] lg:text-[106px] xl:text-[118px] leading-[0.92] font-serif tracking-tight select-none block text-center lg:text-left">
                  SE DERRITE
                </span>
                {/* Melting drips underline - the ice cream anchor */}
                <svg
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  className="absolute -bottom-6 left-0 w-full h-7 pointer-events-none drop-shadow-[0_3px_6px_rgba(214,64,69,0.35)]"
                  aria-hidden="true"
                >
                  <path
                    d="M5 14 C 55 5, 105 20, 150 10 C 190 3, 235 16, 295 9"
                    stroke="var(--cherry)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="58" cy="24" r="3.6" fill="var(--cherry)" />
                  <circle cx="150" cy="19" r="4.2" fill="var(--cherry)" />
                  <circle cx="240" cy="23" r="3.4" fill="var(--cherry)" />
                  <path d="M96 24 L 99 15 L 102 25 Z" fill="var(--cherry)" />
                  <path d="M196 22 L 199 15 L 202 23 Z" fill="var(--cherry)" />
                </svg>
              </div>

              {/* Line 3 - script with heart */}
              <div
                className={`${transitionClass} transform origin-center`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${staggerDelay(3)}ms`,
                }}
              >
                <h2 className="font-script text-[var(--cherry)] text-[36px] sm:text-5xl md:text-[58px] lg:text-[66px] xl:text-[74px] leading-[1.12] tracking-wide drop-shadow-[0_2px_10px_rgba(214,64,69,0.28)] text-center lg:text-left">
                  en cada bola.{" "}
                  <span className="text-[var(--rose)] text-3xl sm:text-4xl lg:text-5xl inline-block -rotate-12 translate-y-1" aria-hidden="true">
                    ♡
                  </span>
                </h2>
              </div>
            </div>

            {/* Subtitle - playful, warm, credible */}
            <p
              className="text-[var(--chocolate-light)] font-medium text-sm sm:text-base leading-snug max-w-sm lg:max-w-md"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${staggerDelay(4)}ms`,
              }}
            >
              Ingredientes reales. Sabores reales. Sonrisas reales.
              <br />
              Reparto en frío, directo a tu puerta.
            </p>

            {/* CTA Button - warm, inviting, bigger */}
            <div
              className="flex flex-col items-center lg:items-start gap-3 mt-5 lg:mt-6 w-full lg:w-auto"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${staggerDelay(5)}ms`,
              }}
            >
              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <button
                  className="group relative inline-flex items-center gap-2.5 bg-[var(--cherry)] hover:bg-[var(--cherry)] text-white font-extrabold text-sm sm:text-base tracking-widest uppercase px-7 py-3.5 rounded-full shadow-[0_10px_28px_rgba(214,64,69,0.4)] hover:shadow-[0_14px_38px_rgba(214,64,69,0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--cherry-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)] active:scale-[0.98] transition-all duration-150 ease-out"
                  aria-label="Pide tus helados y caprichos ahora"
                >
                  <span>Pedir ahora</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Secondary subtle CTA */}
                <button
                  className="hidden sm:inline-flex items-center gap-1.5 text-[var(--chocolate-light)] hover:text-[var(--chocolate)] font-semibold text-sm sm:text-base transition-colors duration-150"
                  aria-label="Ver todos los sabores"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Explorar sabores
                </button>
              </div>

              {/* Trust signal chips - friendly credibility */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 text-[var(--chocolate-light)] text-xs sm:text-sm font-semibold">
                  <span className="text-[#669bbc] text-sm" aria-hidden="true">★</span>
                  4.9 · +2.400 bolas felices
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--rose)]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-[var(--chocolate-light)] text-xs sm:text-sm font-semibold">
                  <span className="text-[#669bbc] text-sm" aria-hidden="true">✦</span>
                  Opciones veganas y sin lactosa
                </span>
              </div>
            </div>

            {/* Decorative accent dashes - bottom left, integrated */}
            <div
              className="mt-5 flex items-center gap-1.5 opacity-50"
              style={{
                opacity: mounted ? 1 : 0,
                transitionDelay: `${staggerDelay(6)}ms`,
              }}
              aria-hidden="true"
            >
              <span className="w-2 h-5 bg-[var(--rose)] rounded-full rotate-[-30deg]" />
              <span className="w-1.5 h-5 bg-[var(--peach)] rounded-full rotate-[-8deg]" />
              <span className="w-5 h-1.5 bg-[var(--mint)] rounded-full" />
              <span className="w-2 h-5 bg-[var(--cherry)] rounded-full rotate-[15deg]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition - seamless flow into SearchBar */}
      <div className="w-full overflow-hidden leading-none pointer-events-none relative z-10 shrink-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-10 block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#E8A6A9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F3D9C4" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0,35 C280,70 580,15 920,55 C1140,80 1300,40 1440,30 L1440,80 L0,80 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}