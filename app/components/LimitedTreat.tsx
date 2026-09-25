import Image from "next/image";

const treats = [
  {
    id: 1,
    name: "Tarta de lava de chocolate",
    image: "/tarta-lava-chocolate-treato.png",
  },
  {
    id: 2,
    name: "Batido de fresas Bliss",
    image: "/batido-fresas-treato.png",
  },
  {
    id: 3,
    name: "Sundae de palomitas de caramelo",
    image: "/sundae-palomitas-caramelo-treato.png",
  },
];

export default function LimitedTreat() {
  return (
    <section id="ofertas" className="bg-[#FDF0D5] px-4 sm:px-6 pb-10 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#C1121F] rounded-[32px] px-6 py-6 sm:px-8 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <h3 className="font-extrabold italic text-2xl sm:text-3xl lg:text-4xl text-[#003049] leading-tight font-serif">
                ¡Caprichos por tiempo limitado!
              </h3>
              <span className="text-[#c1121f] text-2xl font-bold">⚡</span>
            </div>
            <p className="text-[#3E2318] font-medium text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              No te pierdas nuestras creaciones exclusivas y deliciosas.
            </p>
            <button className="bg-[#003049] hover:bg-[#780000] transition-all duration-200 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:scale-105">
              EXPLORAR AHORA
            </button>
          </div>

          {/* Decorative vintage clock icon matching dis.jpg */}
          <div className="hidden md:flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#003049] flex-shrink-0 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#003049]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* 3 Treat White Capsules matching dis.jpg */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap sm:flex-nowrap z-10">
            {treats.map((treat) => (
              <div
                key={treat.id}
                className="relative w-28 sm:w-32 md:w-36 h-36 sm:h-40 md:h-44 rounded-full overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <Image
                  src={treat.image}
                  alt={`Foto de ${treat.name} de Treato`}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
