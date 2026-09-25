"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "treato-cookie-consent";

type Consent = "accepted" | "rejected" | null;

let listeners: (() => void)[] = [];

const getSnapshot = (): Consent => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) as Consent;
  } catch {
    return null;
  }
};

const getServerSnapshot = (): Consent => null;

const subscribe = (callback: () => void) => {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((listener) => listener !== callback);
  };
};

const emit = () => {
  for (const listener of listeners) listener();
};

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (consent !== null) return null;

  const decide = (value: Exclude<Consent, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage unavailable; dismiss the banner for this session only
    }
    emit();
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 z-[60] sm:left-1/2 sm:right-auto sm:w-full sm:max-w-xl sm:-translate-x-1/2"
    >
      <div className="bg-[#003049] text-white rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="text-xl">🍪</span>
            <div>
              <p className="font-extrabold text-sm sm:text-base">Usamos cookies</p>
              <p className="text-[#8fb0c4] text-xs sm:text-sm mt-1 leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia,
                analizar el tráfico y mostrarte contenido que te encante. Puedes leer
                más en nuestras{" "}
                <Link href="/faq#cookies" className="text-[#C1121F] hover:underline font-semibold">
                  preguntas frecuentes
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col-reverse sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="flex-1 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              Solo esenciales
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="flex-1 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#C1121F] hover:bg-[#780000] transition-colors cursor-pointer"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}