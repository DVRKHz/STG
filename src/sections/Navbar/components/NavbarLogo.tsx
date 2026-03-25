import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavbarLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  const PARTNER_LOGOS = [
    { src: "/logo-cedes.png", alt: "CEDES 1" },
    { src: "/logo-cedes.png", alt: "CEDES 2" },
    { src: "/logo-cedes.png", alt: "CEDES 3" },
    { src: "/logo-cedes.png", alt: "CEDES 4" },
    { src: "/logo-cedes.png", alt: "CEDES 5" },
    { src: "/logo-cedes.png", alt: "CEDES 6" },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4 flex-1">
      {/* LOGOS EXTRA: Solo visibles en Desktop (lg) */}
      <div className={`
        hidden lg:flex items-center gap-4 border-r pr-4 border-neutral-100 transition-all duration-500 overflow-hidden
        ${isScrolled ? 'max-w-0 opacity-0 invisible' : 'max-w-[300px] opacity-100'}
      `}>
        {PARTNER_LOGOS.map((logo, i) => (
          <img key={i} src={logo.src} className="h-8 w-auto grayscale opacity-70" alt={logo.alt} />
        ))}
      </div>

      {/* LOGO PRINCIPAL: Ajustado para no cortarse en móvil */}
      <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
        <img 
          src="/unach-logo2.png" 
          className={`shrink-0 transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10 md:h-14'}`} 
          alt="UNACH"
        />
        <div className="flex flex-col leading-tight overflow-hidden">
          <span className={`font-bold text-neutral-800 transition-all truncate md:whitespace-normal ${
            isScrolled ? 'text-[11px] md:text-sm' : 'text-xs md:text-base lg:text-lg'
          }`}>
            Sustentabilidad, Territorio y Gobernanza
          </span>
          <span className="text-[8px] md:text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
            UNACH
          </span>
        </div>
      </Link>
    </div>
  );
};