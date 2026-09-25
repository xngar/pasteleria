import datos from "./combos-helados.json";

export type VarianteHelado = "copa" | "tarrina" | "cono" | "sundae" | "vaso";

export type Sabor = {
  nombre: string;
  color: string;
};

export type Arte = {
  variante: VarianteHelado;
  fondo: string;
  taza: string;
  sirope: string;
  chispas: string[];
  adorno: string;
};

export type Combo = {
  id: number;
  slug: string;
  nombre: string;
  categoria: string;
  formato: string;
  precio: string;
  precioAnterior: string;
  etiquetas: string[];
  descripcion: string;
  descripcionDetallada: string;
  sabores: Sabor[];
  incluye: string[];
  alergenos: string[];
  calorias: number;
  valoracion: number;
  resenas: number;
  arte: Arte;
};

type DatosCombos = {
  seccion: {
    titulo: string;
    subtitulo: string;
    ariaAnterior: string;
    ariaSiguiente: string;
  };
  combos: Combo[];
};

export const { seccion, combos } = datos as unknown as DatosCombos;
