"use client";

import { useEffect, useRef, useState } from "react";

const MENU_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Combos", href: "#combos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Opiniones", href: "#opiniones" },
];

export default function Navbar() {
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`absolute top-0 left-0 right-0 md:pt-1 ${menuOpen ? "z-[70]" : "z-50"}`}
    >
      {/* Row 1: hamburger (mobile) | logo (center) | cart */}
      <div className="relative flex items-center justify-between px-4 py-2.5 sm:px-8">
        {/* Hamburger Menu Button - mobile only */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 bg-[#003049] hover:bg-[#780000] transition-colors rounded-xl gap-1.5 shadow-md cursor-pointer md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          ></span>
        </button>

        {/* Logo - perfectly centered regardless of side widths */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center pointer-events-none">
          <a
            href="#inicio"
            className="font-script text-[#003049] text-3xl sm:text-4xl lg:text-[42px] leading-none flex items-center"
            aria-label="Treato – volver al inicio"
          >
            Treato<span className="text-[#C1121F] text-2xl sm:text-3xl lg:text-[30px] ml-1">♥</span>
          </a>
          <p className="text-[#003049] text-[8px] sm:text-[10px] font-black tracking-[0.28em] uppercase mt-1 font-nunito">
            DULCE • SALADO • SONRISAS
          </p>
        </div>

        {/* Shopping Bag Button with pink count badge */}
        <div className="relative">
          <button
            className="flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 bg-[#003049] hover:bg-[#780000] transition-colors rounded-xl shadow-md cursor-pointer"
            aria-label="Carrito de compras"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#C1121F] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: nav links centered below the logo (desktop only) */}
      <nav
        className="hidden md:flex items-center justify-center gap-7 lg:gap-9 border-t border-[#003049]/10 py-2 mx-4 sm:mx-8"
        aria-label="Navegación principal"
      >
        {MENU_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-[13px] font-bold tracking-[0.14em] uppercase text-[#003049] hover:text-[#C1121F] transition-colors duration-150 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-[#C1121F] after:transition-all after:duration-200 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Fullscreen mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] flex h-[100dvh] w-screen flex-col bg-[#003049] transition-opacity duration-300 ease-out md:hidden ${menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      >
        {/* Close button */}
        <div className="flex shrink-0 items-center justify-end px-4 pt-3 sm:px-8 sm:pt-5">
          <button
            ref={closeButtonRef}
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-[#FDF0D5] shadow-md transition-colors hover:bg-[#C1121F] focus-visible:ring-2 focus-visible:ring-[#669bbc] focus-visible:outline-none"
            aria-label="Cerrar menú"
            tabIndex={menuOpen ? 0 : -1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Centered links */}
        <nav
          className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1 px-6"
          aria-label="Navegación móvil"
        >
          {MENU_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="w-full rounded-2xl px-4 py-4 text-center text-2xl font-extrabold tracking-[0.12em] text-[#FDF0D5] uppercase transition-colors duration-200 hover:bg-white/10 hover:text-[#669bbc] focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#669bbc] focus-visible:outline-none"
              style={{
                transitionDelay: menuOpen ? `${i * 45}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Footer tagline */}
        <p className="shrink-0 px-6 pb-8 text-center text-[10px] font-black tracking-[0.28em] text-[#669bbc] uppercase font-nunito sm:pb-10">
          DULCE • SALADO • SONRISAS
        </p>
      </div>
    </header>
  );
}