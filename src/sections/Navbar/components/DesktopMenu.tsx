import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

// Configuración de los enlaces de navegación
const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

export const DesktopMenu = () => {
  // Estado para controlar qué dropdown (submenú) está visible actualmente
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // useRef para almacenar un temporizador y evitar que el menú se cierre instantáneamente (efecto "debounce")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Hook de react-router para obtener la ruta actual (ej: '/contacto')
  const location = useLocation();

  /**
   * Maneja la entrada del mouse a un elemento del menú.
   * Cancela cualquier temporizador de cierre pendiente y abre el submenú.
   */
  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  /**
   * Maneja la salida del mouse de un elemento del menú.
   * Establece un pequeño retraso (300ms) antes de cerrar el submenú para mejorar la experiencia de usuario.
   */
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  return (
    // 'hidden md:flex' oculta el menú en móviles y lo muestra a partir de tablets/escritorio
    <nav className="hidden md:flex items-center">
      <ul className="flex items-center gap-1">
        {MENU_LINKS.map((link) => {
          // Lógica para determinar si el enlace actual es el que está visitando el usuario
          // Es 'true' si la URL coincide con el href principal o con alguno de sus submenús
          const isActive = location.pathname === link.href || 
                           link.submenu?.some(sub => location.pathname === sub.href);

          return (
            <li 
              key={link.name} 
              className="relative h-full flex items-center"
              // Solo activa los eventos de hover si el link realmente tiene un submenú
              onMouseEnter={() => link.submenu && handleMouseEnter(link.name)}
              onMouseLeave={() => link.submenu && handleMouseLeave()}
            >
              <Link
                to={link.href}
                // Estilos dinámicos: si está activo, aplica colores cian; si no, colores neutrales con hover
                className={`flex items-center px-4 py-2 text-[15px] font-bold transition-all rounded-full
                  ${isActive ? 'text-cyan-600 bg-cyan-50/50' : 'text-neutral-700 hover:text-cyan-500'}
                `}
              >
                {link.name}
                {/* Si hay submenú, muestra una flecha que rota 180° cuando está abierto */}
                {link.submenu && (
                  <ChevronDown size={14} className={`ml-1 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Contenedor del Dropdown (Submenú) */}
              {link.submenu && (
                <div className={`absolute left-0 top-full pt-2 transition-all duration-300 
                  ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="w-64 bg-white border border-neutral-100 shadow-2xl rounded-2xl py-2 overflow-hidden">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link 
                          to={sub.href} 
                          // Estilo individual de cada elemento dentro del dropdown
                          className={`block px-6 py-3 text-sm transition-colors 
                            ${location.pathname === sub.href ? 'text-cyan-600 bg-cyan-50' : 'text-neutral-600 hover:bg-neutral-50'}`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};