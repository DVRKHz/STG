import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

const PARTNER_LOGOS = [
    { src: "/fing.png", alt: "Ingenieria" },
    { src: "/farq.png", alt: "Arquitectura" },
    { src: "/ceco.jpg", alt: "CECOSICE" },
    { src: "/ligalab.png", alt: "LigaLab" },
    { src: "/fhum.jpg", alt: "Humanidades" },
];

export const DesktopMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center">
      <ul className={`flex items-center transition-all duration-500 ${isScrolled ? 'gap-1' : 'gap-2'}`}>
        {MENU_LINKS.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`px-4 py-2 font-bold transition-all rounded-full whitespace-nowrap
                  ${isScrolled ? 'text-[13px] gap-2' : 'text-[15px] gap-4'}
                  ${isActive ? 'text-cyan-600 bg-cyan-50/80' : 'text-neutral-700 hover:text-cyan-500 hover:bg-neutral-50'}
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};