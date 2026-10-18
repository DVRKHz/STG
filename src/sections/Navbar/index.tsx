import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";
import { ThemeToggle } from "@/sections/Navbar/components/ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Estado de compresión del Navbar
      setIsScrolled(window.scrollY > 20);

      // Porcentaje exacto de scroll para la barra superior
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-in-out border-b transform-gpu ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xs py-1.5 border-neutral-200/80" 
          : "bg-white py-3.5 border-transparent"
      }`}
    >
      {/* Contenedor fluido con amplio margen para respiración de logos */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-full">
        
        {/* Identidad Institucional + Logos Aliados */}
        <div className="flex items-center gap-6 lg:gap-10 min-w-0">
          <NavbarLogo isScrolled={isScrolled} />
        </div>

        {/* Menú de Navegación Desktop / Mobile */}
        <div className="flex shrink-0 items-center gap-1 lg:gap-2">
          <DesktopMenu isScrolled={isScrolled} />
          <div className="border-l border-neutral-200/80 pl-1 md:ml-1 md:pl-2">
            <ThemeToggle />
          </div>

          <div className="md:hidden ml-3">
            <MobileMenu />
          </div>
        </div>

      </div>

      {/* Indicador sutil de progreso de lectura */}
      <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-neutral-100 overflow-hidden pointer-events-none">
        <div 
          className="h-full bg-cyan-600 transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};