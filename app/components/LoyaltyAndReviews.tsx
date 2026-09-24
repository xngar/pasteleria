import Image from "next/image";

const customerReviews = [
  { id: 1, image: "/cliente-feliz-treato-1.png", rotate: "-rotate-2" },
  { id: 2, image: "/cliente-feliz-treato-2.png", rotate: "rotate-1" },
  { id: 3, image: "/cliente-feliz-treato-3.png", rotate: "-rotate-1" },
  { id: 4, image: "/cliente-feliz-treato-4.png", rotate: "rotate-2" },
];

export default function LoyaltyAndReviews() {
  return (
    <section id="opiniones" className="bg-[#FFF0E8] px-4 sm:px-6 pb-12 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Side: Loyalty Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FF2D7A] rounded-[32px] p-6 sm:p-7 flex flex-row items-center justify-between gap-4 shadow-md relative overflow-hidden">
            {/* Text & Button */}
            <div className="text-white z-10 flex-1">
              <div className="flex items-center gap-1.5 mb-1.5">
                <h3 className="font-extrabold italic text-2xl sm:text-3xl leading-none font-serif">
                  Fidelidad que<br />sabe mejor
                </h3>
                <span className="text-xl -mt-4">👑</span>
              </div>
              <p className="text-pink-100 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                Gana puntos en cada pedido<br />y desbloquea premios deliciosos.
              </p>
              <button className="bg-[#2C1810] hover:bg-[#1A0E0A] transition-all duration-200 text-white font-bold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full shadow-md hover:scale-105">
                ÚNETE Y GANA
              </button>
            </div>

            {/* 3D Loyalty Gift Chest */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 z-10">
              <Image
                src="/cofre-fidelidad-treato.png"
                alt="Cofre de recompensas del programa de fidelidad de Treato"
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Loved by Our Treat Lovers (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Header with doodles */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="text-amber-400 text-base font-bold">✦</span>
              <h3 className="text-[#2C1810] font-extrabold text-lg sm:text-xl font-serif italic">
Amados por nuestros golosos
              </h3>
              <span className="text-pink-500 text-base font-bold">✦</span>
            </div>

            {/* 4 Polaroid Customer Photos */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 items-center">
              {customerReviews.map((review) => (
                <div
                  key={review.id}
                  className={`relative aspect-[9/10] w-full rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ${review.rotate}`}
                >
                  <Image
                    src={review.image}
                    alt={`Cliente feliz de Treato disfrutando de un capricho (${review.id})`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-[#E91E8C] font-semibold text-xs text-center lg:text-right mt-2 font-nunito">
              ¡Más caprichos, más sonrisas! ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
