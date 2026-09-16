import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#FFF5EE] overflow-hidden pt-18 pb-0 select-none">
      {/* Top Left Organic Pink Wave Shape matching dis.jpg */}
      <div className="absolute -top-16 -left-20 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#FFA4BA] opacity-35 blur-2xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FF8EA7]/30 to-transparent rounded-full pointer-events-none" />

      {/* Decorative Radiate dashes (Amber) between Title and Food Platter */}
      <div className="absolute top-24 left-[46%] md:left-[44%] lg:left-[42%] hidden sm:flex items-center gap-1 opacity-90 pointer-events-none z-10">
        <span className="w-1.5 h-4 bg-[#FF9F1C] rounded-full rotate-[-28deg] inline-block"></span>
        <span className="w-1.5 h-5 bg-[#FF9F1C] rounded-full rotate-[-5deg] inline-block"></span>
        <span className="w-1.5 h-4 bg-[#FF9F1C] rounded-full rotate-[24deg] inline-block"></span>
      </div>

      {/* Decorative Sparkles Top Right */}
      <div className="absolute top-20 right-12 text-[#FFA4BA] text-xl font-bold select-none pointer-events-none hidden md:block z-10">
        ✦
      </div>
      <div className="absolute top-28 right-8 text-[#FF9F1C] text-sm select-none pointer-events-none hidden md:block z-10">
        ✦
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between min-h-[500px] lg:min-h-[550px] relative z-10">
        {/* Left Side: Typography & CTA */}
        <div className="flex-1 pt-6 md:pt-10 pb-8 md:pb-12 max-w-lg z-20">
          {/* Headline */}
          <div className="flex flex-col items-start leading-none mb-4">
            {/* Line 1: Your Little */}
            <h2 className="font-script text-[#FF2D7A] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] -rotate-2 transform origin-left drop-shadow-sm mb-1">
              Your Little
            </h2>

            {/* Line 2: Treat ♡ */}
            <div className="flex items-center gap-2 my-1">
              <h2 className="text-[#2C1810] font-black italic text-5xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight font-serif leading-none">
                Treat
              </h2>
              {/* Pink Heart icon matching dis.jpg */}
              <span className="text-[#FF2D7A] text-3xl sm:text-4xl md:text-5xl font-bold transform -rotate-12 translate-y-1">
                ♥
              </span>
              <span className="text-[#2C1810] text-3xl sm:text-4xl font-black -ml-1 -mt-4">
                &apos;
              </span>
            </div>

            {/* Line 3: Starts Here */}
            <h2 className="font-script text-[#FF2D7A] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] rotate-1 transform origin-left drop-shadow-sm mt-1">
              Starts Here
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[#2C1810] font-semibold text-sm sm:text-base md:text-lg mt-5 mb-7 leading-snug">
            Delicious bites. Happy vibes.
            <br />
            Delivered fast to your door!
          </p>

          {/* CTA Button & Bottom Left Accents */}
          <div className="flex items-center gap-4">
            <button className="bg-[#FF2D7A] hover:bg-[#E01E69] transition-all duration-200 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 ring-4 ring-[#FF2D7A]/25 cursor-pointer">
              ORDER NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Decorative Pink Accent Dashes on Bottom Left matching dis.jpg */}
          <div className="mt-6 flex items-center gap-1 opacity-80">
            <span className="w-1.5 h-4 bg-[#FF2D7A] rounded-full rotate-[-35deg] inline-block"></span>
            <span className="w-1.5 h-4 bg-[#FF2D7A] rounded-full rotate-[-10deg] inline-block"></span>
            <span className="w-3.5 h-1.5 bg-[#FF2D7A] rounded-full inline-block"></span>
          </div>
        </div>

        {/* Right Side: Exact Food Platter Image */}
        <div className="flex-1 flex items-end justify-center md:justify-end relative w-full mt-2 md:mt-0">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
            <Image
              src="/hero_food_final.png"
              alt="Delicious Treato food spread on wooden platter"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Pink Curve Shape flowing seamlessly into SearchBar */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mt-4 relative z-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C320,60 720,10 1100,50 C1280,65 1380,40 1440,30 L1440,60 L0,60 Z"
            fill="#FFA8BF"
          />
        </svg>
      </div>
    </section>
  );
}
