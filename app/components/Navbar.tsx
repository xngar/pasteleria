"use client";

import { useEffect, useState } from "react";

const MENU_LINKS = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#" },
  { label: "Offers", href: "#" },
  { label: "My Orders", href: "#" },
  { label: "Track Order", href: "#" },
];

export default function Navbar() {
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 md:pt-1">
      {/* Row 1: hamburger (mobile) | logo (center) | cart */}
      <div className="relative flex items-center justify-between px-4 py-2.5 sm:px-8">
        {/* Hamburger Menu Button - mobile only */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 bg-[#2C1810] hover:bg-[#1A0E0A] transition-colors rounded-xl gap-1.5 shadow-md cursor-pointer md:hidden"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Logo - perfectly centered regardless of side widths */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center pointer-events-none">
          <h1 className="font-script text-[#2C1810] text-3xl sm:text-4xl lg:text-[42px] leading-none flex items-center">
            Treato<span className="text-[#FF2D7A] text-2xl sm:text-3xl lg:text-[30px] ml-1">♥</span>
          </h1>
          <p className="text-[#2C1810] text-[8px] sm:text-[10px] font-black tracking-[0.28em] uppercase mt-1 font-nunito">
            SWEET • SAVORY • SMILES
          </p>
        </div>

        {/* Shopping Bag Button with pink count badge */}
        <div className="relative">
          <button
            className="flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 bg-[#2C1810] hover:bg-[#1A0E0A] transition-colors rounded-xl shadow-md cursor-pointer"
            aria-label="Shopping Cart"
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
            <span className="absolute -top-1.5 -right-1.5 bg-[#FF2D7A] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: nav links centered below the logo (desktop only) */}
      <nav
        className="hidden md:flex items-center justify-center gap-7 lg:gap-9 border-t border-[#2C1810]/10 py-2 mx-4 sm:mx-8"
        aria-label="Main navigation"
      >
        {MENU_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-[13px] font-bold tracking-[0.14em] uppercase text-[#2C1810] hover:text-[#FF2D7A] transition-colors duration-150 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-[#FF2D7A] after:transition-all after:duration-200 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Invisible backdrop to close the menu on outside tap (mobile) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-3 right-3 mt-2 z-50 md:hidden bg-[#2C1810] rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="p-3 flex flex-col" aria-label="Mobile navigation">
          {MENU_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-left rounded-xl px-4 py-3 text-sm font-bold tracking-wide text-[#FFF0E8] hover:bg-white/10 hover:text-[#FF2D7A] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}