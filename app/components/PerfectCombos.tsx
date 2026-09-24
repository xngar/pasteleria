"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const combos = [
  {
    id: 1,
    name: "Combo de hamburguesa con queso",
    price: "$8.99",
    image: "/combo_cheesy_burger.jpg",
  },
  {
    id: 2,
    name: "Combo Goloso",
    price: "$7.49",
    image: "/combo_sweet_tooth.jpg",
  },
  {
    id: 3,
    name: "Caja Snack Attack",
    price: "$9.49",
    image: "/combo_snack_attack.jpg",
  },
  {
    id: 4,
    name: "Combo Mega Treat",
    price: "$10.99",
    image: "/combo_mega_treat.jpg",
  },
  {
    id: 5,
    name: "Classic Duet Combo",
    price: "$8.49",
    image: "/combo_1_real.jpg",
  },
  {
    id: 6,
    name: "Family Feast Combo",
    price: "$12.99",
    image: "/combo_2_real.jpg",
  },
  {
    id: 7,
    name: "Crunch Time Combo",
    price: "$9.99",
    image: "/combo_3_real.jpg",
  },
  {
    id: 8,
    name: "Double Delight Combo",
    price: "$11.49",
    image: "/combo_4_real.jpg",
  },
];

export default function PerfectCombos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setIsPrevDisabled(el.scrollLeft <= 1);
    setIsNextDisabled(
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
    );
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const visibleCount = el.clientWidth >= 768 ? 4 : 2;
    const card = el.querySelector<HTMLElement>("[data-combo-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? (card.offsetWidth + gap) * visibleCount : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hidden md:flex transition-colors z-10 " +
    "disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <section id="combos" className="bg-[#FFF0E8] py-10 px-4 sm:px-6 scroll-mt-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-amber-400 text-xl">✦</span>
          <h2 className="text-[#2C1810] font-extrabold text-xl sm:text-2xl">
            Combos perfectos para ti
          </h2>
          <span className="text-amber-400 text-xl">✦</span>
        </div>

        {/* Combo Slider */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide [scroll-padding-left:0rem]"
          >
            {combos.map((combo) => (
              <div
                key={combo.id}
                data-combo-card
                className="snap-start shrink-0 w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.75rem)] bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-[#FFF8F0]">
                  <Image
                    src={combo.image}
                    alt={combo.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-[#2C1810] font-semibold text-xs sm:text-sm leading-tight">
                      {combo.name}
                    </p>
                    <p className="text-[#2C1810] font-extrabold text-base sm:text-lg mt-0.5">
                      {combo.price}
                    </p>
                  </div>
                  <button className="w-8 h-8 bg-[#E91E8C] hover:bg-[#c2177a] transition-colors rounded-full flex items-center justify-center flex-shrink-0 shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => scrollByPage(-1)}
            disabled={isPrevDisabled}
            className={`${arrowClass} -left-4 bg-[#2C1810] hover:bg-[#1A0E0A]`}
            aria-label="Previous combos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={() => scrollByPage(1)}
            disabled={isNextDisabled}
            className={`${arrowClass} -right-4 bg-[#2C1810] hover:bg-[#1A0E0A]`}
            aria-label="Next combos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}