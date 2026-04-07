import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { src: "/iei.jpg", alt: "Indigenas" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // --- CERRAR EL MENÚ CUANDO CAMBIA LA RUTA ---
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // --- BLOQUEO DE SCROLL CUANDO EL MENÚ ESTÁ ABIERTO ---
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 transition-transform active:scale-90" aria-label="Abrir menú">
        <Menu size={28} className="text-neutral-700" />
      </button>

      {/* Contenedor Principal con Z-Index muy alto */}
      <div className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}>
        
        {/* Overlay (Fondo oscuro) */}
        <div 
          className={`absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`} 
          onClick={() => setIsOpen(false)} 
        />

        {/* Panel del Menú - h-[100dvh] usa la altura real del dispositivo */}
        <div className={`absolute right-0 top-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          
          {/* Header del Menú fijo arriba */}
          <div className="p-4 flex justify-end border-b border-neutral-100">
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-neutral-50 rounded-full transition-colors" aria-label="Cerrar menú">
              <X size={24} className="text-neutral-500" />
            </button>
          </div>

          {/* Enlaces con scroll interno si la pantalla es muy pequeña */}
          <nav className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700 mb-6">Navegación</p>
            <ul className="space-y-1">
              {MENU_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`block p-4 rounded-xl font-bold transition-all ${
                        isActive 
                          ? "bg-cyan-50 text-cyan-600 translate-x-2" 
                          : "text-neutral-700 active:bg-neutral-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sección de logos siempre al fondo */}
          <div className="p-6 bg-neutral-50/80 border-t border-neutral-100">
            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Instituciones Aliadas</p>
            <div className="grid grid-cols-3 gap-2">
              {PARTNER_LOGOS.map((logo, i) => (
                <div key={i} className="aspect-square bg-white border border-neutral-200/60 rounded-lg flex items-center justify-center p-2 shadow-sm">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};