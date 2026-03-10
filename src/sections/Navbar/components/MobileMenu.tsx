import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Botón Hamburguesa */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-neutral-800"
      >
        <Menu size={30} />
      </button>

      {/* CONTENEDOR PRINCIPAL DEL MENÚ 
        Aquí está la magia: bg-white, h-screen y w-full garantizan 
        que cubra absolutamente todo como una pared sólida.
      */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex flex-col transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Encabezado del menú */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 bg-white">
          <span className="font-bold text-xl text-neutral-900">MENÚ</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Lista de enlaces */}
        <nav className="flex-1 overflow-y-auto bg-white">
          <ul className="flex flex-col bg-white">
            {MENU_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href} className="border-b border-neutral-100 bg-white">
                  <Link
                    to={link.href}
                    className={`flex items-center justify-between px-6 py-5 text-lg font-semibold transition-colors
                      ${isActive ? 'text-cyan-600 bg-cyan-50' : 'text-neutral-800 bg-white active:bg-neutral-50'}
                    `}
                  >
                    {link.name}
                    <ChevronRight 
                      size={18} 
                      className={isActive ? 'text-cyan-600' : 'text-neutral-300'} 
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};