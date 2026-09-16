import Image from "next/image";

const combos = [
  {
    id: 1,
    name: "Cheesy Burger Combo",
    price: "$8.99",
    image: "/combo_cheesy_burger.jpg",
  },
  {
    id: 2,
    name: "Sweet Tooth Combo",
    price: "$7.49",
    image: "/combo_sweet_tooth.jpg",
  },
  {
    id: 3,
    name: "Snack Attack Box",
    price: "$9.49",
    image: "/combo_snack_attack.jpg",
  },
  {
    id: 4,
    name: "Mega Treat Combo",
    price: "$10.99",
    image: "/combo_mega_treat.jpg",
  },
];

export default function PerfectCombos() {
  return (
    <section className="bg-[#FFF0E8] py-10 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-amber-400 text-xl">✦</span>
          <h2 className="text-[#2C1810] font-extrabold text-xl sm:text-2xl">
            Perfect Combos for You
          </h2>
          <span className="text-amber-400 text-xl">✦</span>
        </div>

        {/* Combo Cards */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
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

          {/* Next arrow */}
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#2C1810] hover:bg-[#1A0E0A] transition-colors rounded-full flex items-center justify-center shadow-lg hidden md:flex">
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
