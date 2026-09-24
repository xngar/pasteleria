const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
        {/* Scooter / delivery bike */}
        <circle cx="10" cy="28" r="5" stroke="white" strokeWidth="2.2" fill="none" />
        <circle cx="30" cy="28" r="5" stroke="white" strokeWidth="2.2" fill="none" />
        <path d="M15 28 L20 18 L28 18 L30 28" stroke="white" strokeWidth="2.2" fill="none" />
        <path d="M20 18 L18 12 L25 12" stroke="white" strokeWidth="2.2" fill="none" />
        <path d="M8 20 L15 20" stroke="white" strokeWidth="2.2" />
      </svg>
    ),
    title: "Entrega rápida",
    subtitle: "A tiempo, siempre",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
        {/* Credit card */}
        <rect x="6" y="10" width="28" height="20" rx="4" stroke="white" strokeWidth="2.2" fill="none" />
        <path d="M6 16 L34 16" stroke="white" strokeWidth="2.2" />
        <rect x="10" y="22" width="8" height="3" rx="1" fill="white" />
      </svg>
    ),
    title: "Pagos fáciles",
    subtitle: "Seguros y sencillos",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
        {/* Tag / discount */}
        <path d="M8 8 L8 18 L22 32 L32 22 L18 8 Z" stroke="white" strokeWidth="2.2" fill="none" />
        <circle cx="13" cy="13" r="2" fill="white" />
        <path d="M26 8 L32 8 L32 14" stroke="white" strokeWidth="2.2" />
      </svg>
    ),
    title: "Mejores ofertas",
    subtitle: "Ofertas que te encantarán",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
        {/* Headset */}
        <path d="M10 20 C10 13 15 8 20 8 C25 8 30 13 30 20" stroke="white" strokeWidth="2.2" fill="none" />
        <rect x="6" y="18" width="6" height="10" rx="3" fill="white" opacity="0.9" />
        <rect x="28" y="18" width="6" height="10" rx="3" fill="white" opacity="0.9" />
        <path d="M30 26 C30 30 26 32 20 32" stroke="white" strokeWidth="2.2" fill="none" />
      </svg>
    ),
    title: "Soporte 24/7",
    subtitle: "Siempre aquí para ti",
  },
];

export default function FeaturesBar() {
  return (
    <section className="relative bg-[#FF2D7A] text-white overflow-hidden">
      {/* Top Scalloped Wave dividing cream content and pink features bar */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C120,30 240,0 360,30 C480,0 600,30 720,0 C840,30 960,0 1080,30 C1200,0 1320,30 1440,0 L1440,32 L0,32 Z"
            fill="#FF2D7A"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-2 pb-7 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-white/20 gap-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-3 px-2 sm:px-4 md:px-6"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
                {feature.icon}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
                  {feature.title}
                </p>
                <p className="text-pink-100 text-[11px] sm:text-xs font-medium mt-0.5">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
