import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

// Configuración de los enlaces (se mantiene igual que en DesktopMenu para consistencia)
const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

export const MobileMenu = () => {
  // Estado para abrir y cerrar el menú lateral
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  /**
   * Efecto 1: Cierre automático al navegar.
   * Cada vez que la URL (location) cambia, forzamos el cierre del menú.
   */
  useEffect(() => setIsOpen(false), [location]);

  /**
   * Efecto 2: Bloqueo de scroll.
   * Si el menú está abierto, deshabilitamos el scroll del cuerpo de la página (body)
   * para evitar que el usuario se desplace por el contenido de fondo mientras navega.
   */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    // 'md:hidden' asegura que este botón y menú solo existan en pantallas pequeñas
    <div className="md:hidden">
      
      {/* Botón Hamburguesa: Gatillo para abrir el menú */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-neutral-800"
      >
        <Menu size={30} />
      </button>

      {/* CONTENEDOR DEL MENÚ (Overlay): 
          - fixed: se mantiene pegado a la pantalla.
          - z-[9999]: se asegura de estar por encima de cualquier otro elemento.
          - translate-x-full / translate-x-0: mueve el menú fuera o dentro de la pantalla lateralmente.
      */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex flex-col transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Encabezado del menú: Contiene el título y el botón de cierre (X) */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 bg-white">
          <span className="font-bold text-xl text-neutral-900">MENÚ</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navegación: flex-1 y overflow-y-auto permiten que la lista sea scrolleable si hay muchos links */}
        <nav className="flex-1 overflow-y-auto bg-white">
          <ul className="flex flex-col bg-white">
            {MENU_LINKS.map((link) => {
              // Verificamos si la ruta actual coincide con el enlace para aplicar estilos de "activo"
              const isActive = location.pathname === link.href;
              
              return (
                <li key={link.href} className="border-b border-neutral-100 bg-white">
                  <Link
                    to={link.href}
                    // 'active:bg-neutral-50' proporciona feedback visual táctil al presionar
                    className={`flex items-center justify-between px-6 py-5 text-lg font-semibold transition-colors
                      ${isActive ? 'text-cyan-600 bg-cyan-50' : 'text-neutral-800 bg-white active:bg-neutral-50'}
                    `}
                  >
                    {link.name}
                    {/* Icono de flecha a la derecha para dar una pista visual de navegación */}
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