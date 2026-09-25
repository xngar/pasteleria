export default function Footer() {
  return (
    <footer className="bg-[#003049] text-white px-4 sm:px-6 pt-10 pb-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-extrabold text-2xl sm:text-3xl italic font-serif flex items-center">
                Treato<span className="text-[#C1121F] text-xl ml-1">♡</span>
              </h2>
              <p className="text-[#8fb0c4] text-xs sm:text-sm mt-1">Pequeños caprichos. Grandes sonrisas.</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-2.5">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C1121F] transition-colors flex items-center justify-center" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C1121F] transition-colors flex items-center justify-center" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C1121F] transition-colors flex items-center justify-center" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.03a4.85 4.85 0 01-1-.34z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C1121F] transition-colors flex items-center justify-center" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 text-white">Enlaces rápidos</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Menú", href: "#menu" },
                { label: "Combos", href: "#combos" },
                { label: "Ofertas", href: "#ofertas" },
                { label: "Opiniones", href: "#opiniones" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8fb0c4] hover:text-[#C1121F] transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 text-white">Ayuda</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Preguntas frecuentes", href: "/faq" },
                { label: "Información de reparto", href: "/faq#reparto" },
                { label: "Devoluciones", href: "/faq#devoluciones" },
                { label: "Contáctanos", href: "/faq#contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8fb0c4] hover:text-[#C1121F] transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Pink Card matching dis.jpg */}
          <div className="bg-[#C1121F] rounded-2xl p-4 sm:p-5 text-white shadow-lg">
            <h4 className="font-extrabold text-sm sm:text-base mb-1">Descarga nuestra app</h4>
            <p className="text-[#fdf0d5] text-xs mb-3">
              ¡Más caprichos, más recompensas!
            </p>
            <div className="flex items-center gap-3">
              {/* Google Play */}
              <a
                href="#"
                className="hover:scale-110 transition-transform text-white"
                aria-label="Get it on Google Play"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.5 247.2-247v-5.8L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-35.8 0-45.6l-1.2-.7zm-309.1 178.5L425.6 286.1l-60.1-60.1-247.2 247 4.3 2.3 2 1.6 151 83.2z"/>
                </svg>
              </a>
              {/* App Store */}
              <a
                href="#"
                className="hover:scale-110 transition-transform text-white"
                aria-label="Download on the App Store"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 523 36.3 341.1 91.1 203.4c26.3-62.7 73-114 130.9-145.3C278.8 27.3 343.3 14.7 405.8 14.7c62.5 0 130.3 22.1 178.4 52.4 47.2 29.6 87.5 71.6 110 122.3zm-344.8-54.9c-23.4-8.9-47.6-14.1-72.2-14.1C321.8 271.9 256.2 315.5 256.2 400c0 69.7 48.4 140.7 116.5 140.7 28.5 0 57.7-11.8 82-28.2 24.3-16.4 49.9-40.8 71.5-40.8 18 0 37.9 11.8 57.7 27.1 21.7 16.4 44.7 40.2 75.1 40.2 79.8 0 137.5-69.1 157.9-135.2-9.6-5.1-118.7-71.9-118.7-200.3 0-111.3 93-167.9 125.2-191.4C781.1 0 646.2 0 594.3 0 461.6 0 378.6 94.3 378.6 211.9c0 28.9 5.4 58 16.7 85.3 12.1 27.3 28.2 52.4 47.6 74.3l1.3 1.3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-[#8fb0c4] text-xs">
          © {new Date().getFullYear()} Treato. All rights reserved. Made with ♡ for treat lovers.
        </div>
      </div>
    </footer>
  );
}
