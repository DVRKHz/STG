import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Usamos la misma constante de links (asegúrate de que esté accesible)
const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Cerrar el menú automáticamente al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <div className="md:hidden">
      {/* Botón Hamburguesa */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-neutral-700"
        aria-label="Abrir menú"
      >
        <Menu size={28} />
      </button>

      {/* Overlay y Menú Lateral */}
      <div className={`fixed inset-0 z-50 transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        
        {/* Fondo oscuro traslúcido */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel del Menú */}
        <nav className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-5 border-b">
            <span className="font-bold text-lg text-cyan-600">Menú</span>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X size={24} className="text-neutral-500" />
            </button>
          </div>

          <ul className="flex flex-col p-4 gap-2">
            {MENU_LINKS.map((link) => {
              const hasSubmenu = !!link.submenu;
              const isActive = location.pathname === link.href;

              return (
                <li key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      className={`flex-grow py-3 px-4 text-base font-semibold rounded-lg transition-colors ${
                        isActive ? 'bg-cyan-50 text-cyan-600' : 'text-neutral-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                    
                    {hasSubmenu && (
                      <button 
                        onClick={() => toggleSubmenu(link.name)}
                        className="p-3 text-neutral-500"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform ${openSubmenu === link.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenú Mobile */}
                  {hasSubmenu && openSubmenu === link.name && (
                    <ul className="ml-4 border-l-2 border-cyan-100 mt-1 flex flex-col gap-1">
                      {link.submenu?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            className={`block py-2 px-6 text-sm ${
                              location.pathname === sub.href ? 'text-cyan-600 font-medium' : 'text-neutral-500'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};