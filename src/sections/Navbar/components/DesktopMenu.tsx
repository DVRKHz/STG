import { Link, useLocation } from "react-router-dom";

const MENU_LINKS = [
  { name: 'Quiénes somos', href: '/quienessomos' },
  { name: 'Información Relevante', href: '/informacion-relevante' },
  { name: 'Acciones', href: '/acciones' },
  { name: 'Contacto', href: '/contacto', isCta: true },
];

export const DesktopMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center" aria-label="Navegación principal">
      <ul className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-1' : 'gap-2'}`}>
        {MENU_LINKS.map((link) => {
          const isActive = location.pathname === link.href;

          // Estilo especial para el botón de Contacto (CTA)
          if (link.isCta) {
            return (
              <li key={link.name} className="ml-1 lg:ml-2">
                <Link
                  to={link.href}
                  className={`inline-flex items-center justify-center font-bold transition-all rounded-full whitespace-nowrap shadow-xs active:scale-95 ${
                    isScrolled ? 'px-3 lg:px-4 py-1.5 text-xs' : 'px-3 lg:px-5 py-2 text-xs lg:text-sm'
                  } ${
                    isActive 
                      ? 'bg-cyan-700 text-white ring-2 ring-cyan-500/50' 
                      : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-600/20'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          }

          return (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`relative px-2 lg:px-4 py-2 font-semibold transition-all duration-200 rounded-full whitespace-nowrap inline-flex items-center gap-1.5 ${
                  isScrolled ? 'text-xs' : 'text-xs lg:text-sm'
                } ${
                  isActive 
                    ? 'text-cyan-700 font-bold bg-cyan-50/80' 
                    : 'text-zinc-700 hover:text-cyan-600 hover:bg-zinc-50'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 inline-block animate-pulse" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};