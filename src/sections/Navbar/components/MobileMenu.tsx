import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

const PARTNER_LOGOS = [
  { src: "/logo-cedes-stretched.png", alt: "CEDES" },
  { src: "/fing.png", alt: "Facultad de Ingeniería" },
  { src: "/farq.png", alt: "Facultad de Arquitectura" },
  { src: "/ceco.jpg", alt: "CECOSICE" },
  { src: "/ligalab.png", alt: "LigaLab" },
  { src: "/iei.jpg", alt: "Instituto de Estudios Indígenas" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cerrar el menú automáticamente cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Cierre con la tecla Escape (Soporte accesibilidad)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  // Bloqueo de scroll global y listener de teclado
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div className="md:hidden">
      {/* Botón activador del menú */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500" 
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        <Menu size={26} strokeWidth={2.2} />
      </button>

      {/* Contenedor Modal del Menú */}
      <div 
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          isOpen ? "visible" : "invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
      >
        {/* Backdrop (Fondo oscuro con desenfoque) */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`} 
          onClick={() => setIsOpen(false)}
          aria-hidden="true" 
        />

        {/* Panel Desplazable del Menú */}
        <div className={`absolute right-0 top-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          
          {/* Header del Panel */}
          <div className="p-4 flex items-center justify-between border-b border-neutral-100">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Menú</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500" 
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>

          {/* Lista de Navegación Principal */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-6">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-700 mb-4 px-2">
                Navegación
              </p>
              <ul className="space-y-1.5">
                {MENU_LINKS.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
                          isActive 
                            ? "bg-cyan-50 text-cyan-700 border-l-4 border-cyan-600 pl-4" 
                            : "text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Footer del Menú: Aliados Institucionales */}
          <div className="p-5 bg-neutral-50 border-t border-neutral-100">
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
              Instituciones Aliadas
            </p>
            <div className="grid grid-cols-3 gap-2">
              {PARTNER_LOGOS.map((logo, i) => (
                <div 
                  key={i} 
                  className="h-12 bg-white border border-neutral-200/80 rounded-xl flex items-center justify-center p-2 shadow-2xs"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-8 max-w-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};