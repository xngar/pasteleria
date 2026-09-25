type IceCreamArtProps = {
  variante: "copa" | "tarrina" | "cono" | "sundae" | "vaso";
  fondo: string;
  taza: string;
  sirope: string;
  chispas: string[];
  adorno: string;
  className?: string;
};

const VARIANTES: Record<
  IceCreamArtProps["variante"],
  { vista: string; cantidad: number }
> = {
  copa: { vista: "Copa de cristal con pie", cantidad: 3 },
  tarrina: { vista: "Tarrina de cartón", cantidad: 3 },
  cono: { vista: "Cono de oblea", cantidad: 2 },
  sundae: { vista: "Vaso de cristal alto", cantidad: 2 },
  vaso: { vista: "Vaso batidor", cantidad: 2 },
};

export function IceCreamArt({
  variante,
  fondo,
  taza,
  sirope,
  chispas,
  adorno,
  className,
}: IceCreamArtProps) {
  const { cantidad } = VARIANTES[variante];
  const bochas = Array.from({ length: cantidad }, (_, i: number) => i);
  const decreciente = (i: number) => 46 - i * 14;

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <rect width="200" height="200" fill={fondo} />
      <circle cx="168" cy="30" r="26" fill="#FFFFFF" opacity="0.35" />
      <circle cx="26" cy="178" r="34" fill="#FFFFFF" opacity="0.22" />

      {bochas.map(i => (
        <circle
          key={i}
          cx={100}
          cy={decreciente(i)}
          r="21"
          fill={chispas[i % chispas.length]}
        />
      ))}

      <path d="M62 74h76c0 30-17 44-38 44S62 104 62 74Z" fill={sirope} />
      <path
        d="M62 74c0-14 17-24 38-24s38 10 38 24"
        fill={taza}
        opacity="0.95"
      />

      {variante === "copa" && (
        <path
          d="M100 118v34m0 0c-10 0-18 4-22 10m22-10c10 0 18 4 22 10"
          stroke={taza}
          strokeWidth="6"
          strokeLinecap="round"
        />
      )}
      {variante === "sundae" && (
        <path
          d="M78 112h44l-6 52a8 8 0 0 1-8 7H92a8 8 0 0 1-8-7Z"
          fill={taza}
        />
      )}
      {variante === "vaso" && (
        <path
          d="M76 108h48l-5 56a10 10 0 0 1-10 9H91a10 10 0 0 1-10-9Z"
          fill={taza}
        />
      )}
      {variante === "tarrina" && (
        <path
          d="M68 108h64l-7 50a10 10 0 0 1-10 8H85a10 10 0 0 1-10-8Z"
          fill={taza}
        />
      )}
      {variante === "cono" && (
        <path
          d="M74 104h52L100 176a6 6 0 0 1-10 0Z"
          fill={taza}
          stroke={sirope}
          strokeWidth="2"
        />
      )}

      <path
        d="M78 62c-6-10 2-18 10-14M110 54c4-12 16-10 18 2"
        stroke={sirope}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="128" cy="86" r="7" fill={adorno} />
      <circle cx="70" cy="92" r="4" fill={adorno} opacity="0.85" />
    </svg>
  );
}
