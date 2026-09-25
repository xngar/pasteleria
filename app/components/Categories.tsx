"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
  circleBg: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Postres dulces",
    circleBg: "bg-[#C3D6E2]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Donut base dough */}
        <circle cx="24" cy="24" r="17" fill="#E89B5F" stroke="#B86E38" strokeWidth="1.2" />
        {/* Pink glossy glaze with wavy edge */}
        <path
          d="M24 8 C33 8 39.5 14.5 39.5 23.5 C39.5 26.5 37.5 28.5 35.5 28.5 C33.5 28.5 32.5 26.5 30.5 26.5 C28.5 26.5 27.5 29.5 25.5 29.5 C23.5 29.5 22.5 26.5 20.5 26.5 C18.5 26.5 17.5 28.5 15.5 28.5 C13.5 28.5 12.5 26 10.5 26 C8.5 26 8 27.5 8.5 24 C8.5 15 15 8 24 8 Z"
          fill="#FF3E7F"
        />
        {/* Donut hole cutout */}
        <circle cx="24" cy="24" r="5.5" fill="#E53935" stroke="#B86E38" strokeWidth="1.2" />
        {/* Sprinkles */}
        <rect x="18" y="12" width="3.8" height="1.8" rx="0.9" fill="#00E5FF" transform="rotate(-20 18 12)" />
        <rect x="27" y="13" width="3.8" height="1.8" rx="0.9" fill="#FFEB3B" transform="rotate(30 27 13)" />
        <rect x="33" y="19" width="3.8" height="1.8" rx="0.9" fill="#FFFFFF" transform="rotate(-40 33 19)" />
        <rect x="13" y="20" width="3.8" height="1.8" rx="0.9" fill="#FFEB3B" transform="rotate(45 13 20)" />
        <rect x="20" y="17" width="3.2" height="1.5" rx="0.75" fill="#FFFFFF" transform="rotate(10 20 17)" />
        <rect x="28" y="25" width="3.2" height="1.5" rx="0.75" fill="#00E5FF" transform="rotate(-15 28 25)" />
        <rect x="15" y="25" width="3.2" height="1.5" rx="0.75" fill="#BA68C8" transform="rotate(60 15 25)" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Bocados salados",
    circleBg: "bg-white",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Top Bun */}
        <path
          d="M10 20 C10 12 16 8 24 8 C32 8 38 12 38 20 C38 21.5 37 22.5 35.5 22.5 L12.5 22.5 C11 22.5 10 21.5 10 20 Z"
          fill="#E89B5F"
          stroke="#C27338"
          strokeWidth="1.2"
        />
        {/* Sesame Seeds */}
        <ellipse cx="18" cy="14" rx="1.2" ry="0.7" fill="#FFF9C4" transform="rotate(-15 18 14)" />
        <ellipse cx="24" cy="12" rx="1.2" ry="0.7" fill="#FFF9C4" />
        <ellipse cx="30" cy="15" rx="1.2" ry="0.7" fill="#FFF9C4" transform="rotate(20 30 15)" />
        <ellipse cx="22" cy="17" rx="1.2" ry="0.7" fill="#FFF9C4" transform="rotate(10 22 17)" />
        {/* Lettuce */}
        <path
          d="M8 23 C10.5 21 13 25 16 23 C19 21 21.5 25 24.5 23 C27.5 21 30.5 25 33.5 23 C36.5 21 39.5 24 39.5 24 L8 24 Z"
          fill="#4CAF50"
        />
        {/* Tomato */}
        <rect x="10" y="24.5" width="28" height="3" rx="1.5" fill="#E53935" />
        {/* Melted Cheese Corner */}
        <polygon points="12,27.5 36,27.5 32,32.5 16,30.5" fill="#669BBC" />
        {/* Patty */}
        <rect x="9" y="29.5" width="30" height="5.5" rx="2.7" fill="#5D4037" />
        {/* Bottom Bun */}
        <path
          d="M11 35.5 L37 35.5 C38 35.5 38.5 36.5 38 37.5 C36.5 40.5 31 42 24 42 C17 42 11.5 40.5 10 37.5 C9.5 36.5 10 35.5 11 35.5 Z"
          fill="#E89B5F"
          stroke="#C27338"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Snacks y patatas",
    circleBg: "bg-[#F3D9C4]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Fries standing up */}
        <rect x="16" y="8" width="3.2" height="18" rx="1" fill="#669BBC" stroke="#FFB300" strokeWidth="0.8" transform="rotate(-12 16 8)" />
        <rect x="20" y="6" width="3.2" height="20" rx="1" fill="#FFCA28" stroke="#FFA000" strokeWidth="0.8" transform="rotate(-4 20 6)" />
        <rect x="24.5" y="7" width="3.2" height="19" rx="1" fill="#669BBC" stroke="#FFB300" strokeWidth="0.8" transform="rotate(5 24.5 7)" />
        <rect x="29" y="9" width="3.2" height="17" rx="1" fill="#FFCA28" stroke="#FFA000" strokeWidth="0.8" transform="rotate(14 29 9)" />
        <rect x="18" y="12" width="2.8" height="14" rx="1" fill="#FFF59D" transform="rotate(-8 18 12)" />
        <rect x="26" y="11" width="2.8" height="15" rx="1" fill="#FFF59D" transform="rotate(8 26 11)" />
        {/* French Fries Carton */}
        <path
          d="M12 22 L36 22 L33 42 C33 43 32 44 31 44 L17 44 C16 44 15 43 15 42 Z"
          fill="#C1121F"
          stroke="#C2185B"
          strokeWidth="1.2"
        />
        {/* Carton Front Scoop */}
        <path
          d="M12 22 C18 27 30 27 36 22 L34.5 30 C29 33 19 33 13.5 30 Z"
          fill="#FF4081"
        />
        {/* Treato White Logo Badge */}
        <circle cx="24" cy="36" r="4.5" fill="white" />
        <path d="M22 36 Q24 34 26 36" stroke="#C1121F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Batidos y bebidas",
    circleBg: "bg-[#C3D6E2]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Striped Straw */}
        <path d="M26 6 L29 18" stroke="#C1121F" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M26.5 8 L27 10" stroke="white" strokeWidth="3.5" />
        <path d="M27.5 12 L28 14" stroke="white" strokeWidth="3.5" />
        {/* Whipped cream / topping */}
        <path
          d="M16 20 C14 17 18 13 22 14 C23 11 27 11 28 14 C32 13 35 16 33 20 Z"
          fill="#FFFFFF"
          stroke="#FFD1DC"
          strokeWidth="1"
        />
        {/* Cup Rim */}
        <rect x="13" y="19" width="22" height="3" rx="1.5" fill="#E0E0E0" />
        {/* Shake Cup Body */}
        <path
          d="M15 22 L33 22 L30 42 C30 43 29 44 28 44 L20 44 C19 44 18 43 18 42 Z"
          fill="#FF6584"
        />
        {/* Cup gradient wave */}
        <path
          d="M15 26 Q24 30 33 26 L32 32 Q24 36 16 32 Z"
          fill="#FF8DA1"
        />
        {/* Cup label */}
        <circle cx="24" cy="35" r="4" fill="white" opacity="0.9" />
        <path d="M22 35 C23 37 25 37 26 35" stroke="#C1121F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Repostería",
    circleBg: "bg-white",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Cake Slice body */}
        <path
          d="M8 32 L36 18 L40 23 L12 37 Z"
          fill="#8D6E63"
        />
        {/* Cream layers */}
        <path
          d="M9.5 30 L37 19.5 L38 21 L10.5 31.5 Z"
          fill="#FFF9C4"
        />
        <path
          d="M11 34 L38.5 23.5 L39.5 25 L12 35.5 Z"
          fill="#FFF9C4"
        />
        {/* Cake top pink icing */}
        <polygon points="8,32 36,18 26,12 8,24" fill="#FF4081" stroke="#C1121F" strokeWidth="1" />
        {/* Frosting dollops on back */}
        <circle cx="28" cy="14" r="3.5" fill="#FFFFFF" />
        <circle cx="33" cy="16.5" r="3" fill="#FFFFFF" />
        {/* Strawberry on top */}
        <path
          d="M19 16 C16 16 15 20 18 22 C20 23 22 20 22 17 C22 16 20 16 19 16 Z"
          fill="#E53935"
        />
        <circle cx="18" cy="18" r="0.5" fill="#FFEB3B" />
        <circle cx="20" cy="19" r="0.5" fill="#FFEB3B" />
        <path d="M19 15 L20 13 M19 15 L18 13" stroke="#4CAF50" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Combos",
    circleBg: "bg-[#F3D9C4]",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-13 sm:h-13" fill="none">
        {/* Box Top Handle */}
        <path
          d="M19 14 C19 9 29 9 29 14"
          stroke="#C1121F"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Box Lid / Peak */}
        <polygon points="12,18 24,12 36,18 24,20" fill="#FF4081" />
        {/* Box Body */}
        <polygon points="12,18 36,18 33,39 15,39" fill="#C1121F" stroke="#C2185B" strokeWidth="1.2" />
        {/* Front Meal Bag Icon / Emblem */}
        <rect x="18" y="24" width="12" height="10" rx="2" fill="white" />
        <circle cx="24" cy="28" r="2" fill="#FF9F1C" />
        <path d="M21 31 Q24 33 27 31" stroke="#C1121F" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Categories() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative bg-[#003049] text-white overflow-visible select-none -mt-1">
      {/* Top Scalloped / Wavy border dividing pink search area and chocolate categories */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-10 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C120,40 240,0 360,20 C480,40 600,0 720,20 C840,40 960,0 1080,20 C1200,40 1320,0 1440,20 L1440,40 L0,40 Z"
            fill="#003049"
          />
        </svg>
      </div>

      {/* Main Categories Row matching dis.jpg layout */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative pt-0 pb-4">
        {/* Category Icons Row with Doodles */}
        <div className="relative flex items-center justify-between sm:justify-center gap-3 sm:gap-6 md:gap-7 overflow-x-auto pt-2 pb-1 px-2 scrollbar-hide">
          {/* Decorative cream doodles (///) placed above Sweet Treats */}
          <div className="absolute -top-3 left-4 sm:left-6 md:left-4 flex items-center gap-1 opacity-90 pointer-events-none">
            <span className="w-1 h-3.5 bg-[#FDF0D5] rounded-full rotate-[-25deg] inline-block"></span>
            <span className="w-1 h-4 bg-[#FDF0D5] rounded-full rotate-[-5deg] inline-block"></span>
            <span className="w-1 h-3.5 bg-[#FDF0D5] rounded-full rotate-[20deg] inline-block"></span>
          </div>

          {/* Decorative heart (♡) top right */}
          <div className="absolute -top-3 right-6 sm:right-10 text-[#FDF0D5] text-xl sm:text-2xl font-light opacity-80 pointer-events-none">
            ♡
          </div>

          {categories.map((cat) => {
            const isSelected = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className="flex flex-col items-center group cursor-pointer flex-shrink-0 transition-transform focus:outline-none"
                style={{ width: "84px" }}
              >
                {/* Category Circle */}
                <div
                  className={`w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] md:w-[82px] md:h-[82px] rounded-full ${cat.circleBg} flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg ${
                    isSelected ? "ring-4 ring-[#669BBC] scale-105" : ""
                  }`}
                >
                  <div className="transition-transform duration-200 group-hover:scale-105">
                    {cat.icon}
                  </div>
                </div>

                {/* Category Title with Nunito Font */}
                <span
                  className="font-nunito text-white font-bold text-[12px] sm:text-[13px] md:text-[14px] mt-2 text-center leading-tight tracking-tight drop-shadow-sm group-hover:text-[#669BBC] transition-colors"
                >
                  {cat.name}
                </span>
              </button>
            );
          })}

          {/* Right Arrow button aligned right beside Combo Deals */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 -mt-5 pl-1">
            <button
              aria-label="Siguientes categorías"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/50 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all duration-200 group focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scalloped / Wavy border dividing chocolate categories and cream combos */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-10 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,20 C1320,40 1200,0 1080,20 C960,40 840,0 720,20 C600,40 480,0 360,20 C240,40 120,0 0,20 Z"
            fill="#003049"
          />
        </svg>
      </div>
    </section>
  );
}
