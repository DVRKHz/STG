import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto' },
];

export const DesktopMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation(); // Detecta la URL actual

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex items-center gap-1">
        {MENU_LINKS.map((link) => {
          const isActive = location.pathname === link.href || 
                           link.submenu?.some(sub => location.pathname === sub.href);

          return (
            <li 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.submenu && handleMouseEnter(link.name)}
              onMouseLeave={() => link.submenu && handleMouseLeave()}
            >
              <Link
                to={link.href}
                className={`flex items-center px-4 py-2 text-[15px] font-bold transition-all rounded-full
                  ${isActive ? 'text-cyan-600 bg-cyan-50/50' : 'text-neutral-700 hover:text-cyan-500'}
                `}
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown size={14} className={`ml-1 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Dropdown Desktop */}
              {link.submenu && (
                <div className={`absolute left-0 top-full pt-2 transition-all duration-300 
                  ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="w-64 bg-white border border-neutral-100 shadow-2xl rounded-2xl py-2 overflow-hidden">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link 
                          to={sub.href} 
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