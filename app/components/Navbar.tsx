"use client";

import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5">
      {/* Hamburger Menu Button */}
      <button
        className="flex flex-col justify-center items-center w-11 h-11 bg-[#2C1810] hover:bg-[#1A0E0A] transition-colors rounded-2xl gap-1.5 shadow-md cursor-pointer"
        aria-label="Open Menu"
      >
        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
      </button>

      {/* Logo in center */}
      <div className="text-center flex flex-col items-center">
        <h1 className="font-script text-[#2C1810] text-3xl sm:text-4xl lg:text-5xl leading-none flex items-center">
          Treato<span className="text-[#FF2D7A] text-2xl sm:text-3xl ml-1">♥</span>
        </h1>
        <p className="text-[#2C1810] text-[8px] sm:text-[10px] font-black tracking-[0.28em] uppercase mt-0.5 font-nunito">
          SWEET • SAVORY • SMILES
        </p>
      </div>

      {/* Shopping Bag Button with pink count badge */}
      <div className="relative">
        <button
          className="flex items-center justify-center w-11 h-11 bg-[#2C1810] hover:bg-[#1A0E0A] transition-colors rounded-2xl shadow-md cursor-pointer"
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
    </nav>
  );
}
