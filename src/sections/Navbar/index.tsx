import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 border-b ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-1 border-neutral-100" 
        : "bg-white py-4 border-transparent"
    }`}>
      {/* Usamos un ancho máximo generoso para que los elementos respiren */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex justify-between items-center h-full">
        
        {/* SECCIÓN IZQUIERDA: Identidad e Instituciones */}
        <div className="flex items-center gap-6 lg:gap-10">
          <NavbarLogo isScrolled={isScrolled} />
        </div>

        {/* SECCIÓN DERECHA: Navegación Pura */}
        <div className="flex items-center">
          <DesktopMenu isScrolled={isScrolled} />
          
          {/* Espacio para el menú móvil en pantallas pequeñas */}
          <div className="md:hidden ml-4">
            <MobileMenu />
          </div>
        </div>

      </div>

      {/* Indicador de lectura ultra-fino al final */}
      <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-neutral-50 overflow-hidden">
        <div 
          className="h-full bg-cyan-500/50 transition-all duration-300" 
          style={{ width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        />
      </div>
    </header>
  );
};