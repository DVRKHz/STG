import { Link } from "react-router-dom";

const PARTNER_LOGOS = [
  { src: "/logo-cedes-stretched.png", alt:"CEDES", size: "h-12"},
  { src: "/fing.png", alt: "Ingenieria", size: "h-9" },
  { src: "/farq.png", alt: "Arquitectura", size: "h-7" },
  { src: "/ceco.jpg", alt: "CECOSICE", size: "h-9" },
  { src: "/ligalab.png", alt: "LigaLab", size: "h-7" },
  { src: "/iei.jpg", alt: "Indigenas", size: "h-9" },
];

export const NavbarLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 flex-1">
      {/* LOGOS EXTRA: Partners */}
      <div className={`
        hidden lg:flex items-center gap-4 border-r pr-4 border-neutral-100 transition-all duration-500 overflow-hidden
        ${isScrolled ? 'max-w-0 opacity-0 invisible' : 'max-w-[400px] opacity-100'}
      `}>
        {PARTNER_LOGOS.map((logo, i) => (
          <img 
            key={i} 
            src={logo.src} 
            className={`${logo.size || 'h-9'} w-auto grayscale opacity-70 object-contain`} 
            alt={logo.alt} 
          />
        ))}
      </div>

      {/* BLOQUE DE LOGOS PRINCIPALES + TEXTO */}
      <Link to="/" className="flex items-center gap-2 md:gap-4 min-w-0 group">
        
        {/* Contenedor de los dos logos principales */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {/* LOGO UNACH */}
          <img 
            src="/unach-logo2.png" 
            className={`transition-all duration-500 object-contain ${
              isScrolled ? 'h-11' : 'h-9 md:h-12'
            }`} 
            alt="UNACH"
          />
        </div>

        {/* TEXTO: Con un borde izquierdo para separar de los logos */}
        <div className="flex flex-col leading-tight overflow-hidden border-l pl-2 md:pl-3 border-neutral-200">
          <span className={`font-bold text-neutral-800 transition-all truncate md:whitespace-normal ${
            isScrolled ? 'text-[10px] md:text-xs' : 'text-[11px] md:text-sm lg:text-base'
          }`}>
            Sustentabilidad, Territorio y Gobernanza
          </span>
          <span className={`text-neutral-400 font-bold uppercase tracking-widest transition-all ${
            isScrolled ? 'text-[7px]' : 'text-[8px] md:text-[9px]'
          }`}>
            UNACH
          </span>
        </div>
      </Link>
    </div>
  );
};