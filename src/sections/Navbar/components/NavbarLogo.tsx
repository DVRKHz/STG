import { Link } from "react-router-dom";

const PARTNER_LOGOS = [
  { src: "/logo-cedes-stretched.png", alt: "CEDES UNACH", size: "h-8", width: "w-14" },
  { src: "/fing.png", alt: "Facultad de Ingeniería UNACH", size: "h-7" },
  { src: "/farq.png", alt: "Facultad de Arquitectura UNACH", size: "h-6" },
  { src: "/ceco.jpg", alt: "CECOSICE", size: "h-7" },
  { src: "/ligalab.png", alt: "LigaLab", size: "h-6" },
  { src: "/iei.jpg", alt: "Instituto de Estudios Indígenas", size: "h-7", width: "w-14" },
];

export const NavbarLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
      
      {/* LOGOS EXTRA: Aliados Institucionales */}
      <div 
        className="hidden xl:flex shrink-0 items-center gap-2 border-r border-neutral-200/80 pr-3"
      >
        {PARTNER_LOGOS.map((logo, i) => (
          <span key={i} className={`logo-surface flex h-10 ${logo.width || "w-10"} shrink-0 items-center justify-center overflow-hidden rounded-lg p-1`}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.size || 'h-8'} max-h-full max-w-full w-auto filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain`}
            />
          </span>
        ))}
      </div>

      {/* BLOQUE PRINCIPAL: Logo UNACH + Nombre del Proyecto */}
      <Link 
        to="/" 
        className="flex items-center gap-2.5 md:gap-3.5 min-w-0 group py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        aria-label="Inicio - Sustentabilidad, Territorio y Gobernanza UNACH"
      >
        {/* Logo de la UNACH */}
        <div className="logo-surface flex shrink-0 items-center justify-center rounded-lg p-1">
          <img 
            src="/unach-logo2.png" 
            alt="Universidad Autónoma de Chiapas"
            className={`transition-all duration-500 object-contain ${
              isScrolled ? 'h-9 md:h-10' : 'h-10 md:h-12'
            }`} 
          />
        </div>

        {/* Identificador de Texto Institucional */}
        <div className="flex flex-col leading-tight border-l border-neutral-200 pl-2.5 md:pl-3 min-w-0">
          <span 
            className={`font-extrabold text-neutral-800 group-hover:text-cyan-700 transition-colors duration-300 truncate md:whitespace-normal leading-tight ${
              isScrolled ? 'text-[11px] md:text-xs' : 'text-xs md:text-sm lg:text-[15px]'
            }`}
          >
            Sustentabilidad, Territorio y Gobernanza
          </span>
          <span 
            className={`text-cyan-700 font-bold uppercase tracking-widest transition-all duration-300 ${
              isScrolled ? 'text-[8px]' : 'text-[9px] md:text-[10px]'
            }`}
          >
            UNACH
          </span>
        </div>
      </Link>

    </div>
  );
};