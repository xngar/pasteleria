"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { IceCreamArt } from "@/components/IceCreamArt";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { combos, seccion, type Combo } from "@/app/data/combos";

function Estrellas({ valoracion }: { valoracion: number }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-bold text-[#003049]"
      aria-label={`Valoración ${valoracion} sobre 5`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-4 text-[#669BBC]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9Z" />
      </svg>
      {valoracion.toFixed(1)}
    </span>
  );
}

function PuntoSabor({ nombre, color }: { nombre: string; color: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-[#003049]">
      <span
        className="size-3.5 shrink-0 rounded-full ring-2 ring-white"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {nombre}
    </li>
  );
}

function DetalleCombo({ combo }: { combo: Combo }) {
  return (
    <>
      <div
        className="relative h-36 w-full shrink-0 overflow-hidden sm:h-52"
        style={{ backgroundColor: combo.arte.fondo }}
      >
        <IceCreamArt
          variante={combo.arte.variante}
          fondo={combo.arte.fondo}
          taza={combo.arte.taza}
          sirope={combo.arte.sirope}
          chispas={combo.arte.chispas}
          adorno={combo.arte.adorno}
          className="size-full"
        />
        {combo.etiquetas.length > 0 && (
          <span className="absolute bottom-3 left-3 rounded-full bg-[#C1121F] px-3 py-1 text-xs font-extrabold text-white shadow">
            {combo.etiquetas[0]}
          </span>
        )}
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-5 pb-2 sm:p-6 sm:pb-2">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide text-[#C1121F] uppercase">
            <span>{combo.categoria}</span>
            <span className="text-[#003049]/30">•</span>
            <span className="text-[#003049]/60">{combo.formato}</span>
          </div>
          <DialogTitle className="text-xl text-[#003049] sm:text-2xl">
            {combo.nombre}
          </DialogTitle>
          <DialogDescription className="text-[#003049]/70">
            {combo.descripcion}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-[#003049]">
              {combo.precio}
            </span>
            {combo.precioAnterior && (
              <span className="text-sm text-[#003049]/40 line-through">
                {combo.precioAnterior}
              </span>
            )}
          </div>
          <Estrellas valoracion={combo.valoracion} />
          <span className="text-xs text-[#003049]/50">
            {combo.resenas} reseñas
          </span>
          {combo.calorias > 0 && (
            <span className="rounded-full bg-[#FDF0D5] px-2.5 py-1 text-xs font-bold text-[#003049]/70">
              {combo.calorias} kcal
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[#003049]/85">
          {combo.descripcionDetallada}
        </p>

        <div>
          <h3 className="mb-2 text-xs font-extrabold tracking-wide text-[#003049]/60 uppercase">
            Sabores
          </h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {combo.sabores.map((sabor) => (
              <PuntoSabor
                key={sabor.nombre}
                nombre={sabor.nombre}
                color={sabor.color}
              />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-extrabold tracking-wide text-[#003049]/60 uppercase">
            Incluye
          </h3>
          <ul className="grid gap-1.5">
            {combo.incluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[#003049]/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mt-0.5 size-4 shrink-0 text-[#C1121F]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {combo.alergenos.length > 0 && (
          <p className="rounded-2xl bg-[#FDF0D5] px-4 py-3 text-xs text-[#003049]/70">
            <span className="font-extrabold">Alérgenos:</span>{" "}
            {combo.alergenos.join(", ")}
          </p>
        )}
      </div>

      <div className="shrink-0 border-t-2 border-[#CFDDE8] bg-[#FFFAF0] px-5 py-4 sm:px-6 [padding-bottom:max(1rem,env(safe-area-inset-bottom))]">
        <Button size="lg" className="w-full">
          Pedir ahora
        </Button>
      </div>
    </>
  );
}

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

  const scrollByCards = (count: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-combo-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: count * step, behavior: "smooth" });
  };

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const visibleCount = el.clientWidth >= 768 ? 4 : 2;
    scrollByCards(direction * visibleCount);
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hidden md:flex transition-colors z-10 " +
    "disabled:opacity-30 disabled:cursor-not-allowed";

  const mobileArrowClass =
    "flex size-11 items-center justify-center rounded-full bg-[#003049] text-white shadow-lg transition-all active:scale-95 " +
    "disabled:opacity-30 disabled:active:scale-100";

  return (
    <section
      id="combos"
      className="bg-[#FDF0D5] scroll-mt-16 px-4 py-10 sm:px-6"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xl text-[#669bbc]" aria-hidden="true">
            ✦
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-[#003049] sm:text-2xl">
              {seccion.titulo}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-[#003049]/60">
              {seccion.subtitulo}
            </p>
          </div>
          <span className="text-xl text-[#669bbc]" aria-hidden="true">
            ✦
          </span>
        </div>

        {/* Combo Slider */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth scrollbar-hide sm:gap-4 [scroll-padding-left:0rem]"
          >
            {combos.map((combo) => (
              <Dialog key={combo.id}>
                <div
                  data-combo-card
                  className="group w-[calc(50%-0.375rem)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md sm:w-[calc(25%-0.75rem)]"
                >
                  <div
                    className="relative h-36 w-full overflow-hidden sm:h-44"
                    style={{ backgroundColor: combo.arte.fondo }}
                  >
                    <IceCreamArt
                      variante={combo.arte.variante}
                      fondo={combo.arte.fondo}
                      taza={combo.arte.taza}
                      sirope={combo.arte.sirope}
                      chispas={combo.arte.chispas}
                      adorno={combo.arte.adorno}
                      className="size-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 p-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold leading-tight text-[#003049] sm:text-sm">
                        {combo.nombre}
                      </p>
                      <p className="mt-0.5 text-base font-extrabold text-[#003049] sm:text-lg">
                        {combo.precio}
                      </p>
                    </div>

                    <DialogTrigger asChild>
                      <button
                        aria-label={`Ver detalles de ${combo.nombre}`}
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#C1121F] text-white shadow transition-colors hover:bg-[#780000]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </DialogTrigger>
                  </div>
                </div>

                <DialogContent>
                  <DetalleCombo combo={combo} />
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => scrollByPage(-1)}
            disabled={isPrevDisabled}
            className={`${arrowClass} -left-4 bg-[#003049] hover:bg-[#780000]`}
            aria-label={seccion.ariaAnterior}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 5l-7 7 7 7"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={() => scrollByPage(1)}
            disabled={isNextDisabled}
            className={`${arrowClass} -right-4 bg-[#003049] hover:bg-[#780000]`}
            aria-label={seccion.ariaSiguiente}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile controls: arrows under the carousel */}
          <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={() => scrollByCards(-1)}
              disabled={isPrevDisabled}
              className={mobileArrowClass}
              aria-label={seccion.ariaAnterior}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 5l-7 7 7 7"
                />
              </svg>
            </button>

            <p className="text-[11px] font-bold tracking-[0.18em] text-[#003049]/50 uppercase">
              Desliza
            </p>

            <button
              onClick={() => scrollByCards(1)}
              disabled={isNextDisabled}
              className={mobileArrowClass}
              aria-label={seccion.ariaSiguiente}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
