import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <div className="flex items-center flex-shrink-0">
      <Link
        to="/"
        className="flex items-center gap-3 group transition-opacity hover:opacity-90"
      >
        {/* Imagen del Logo */}
        <img
          src="/logo-cedes.png"
          alt="CEDES Logo"
          className="h-10 w-auto object-contain md:h-12"
        />

        {/* Texto del Proyecto */}
        <div className="flex flex-col leading-tight max-w-[180px] md:max-w-none">
          <span className="text-sm font-bold text-gray-800 md:text-base lg:text-lg group-hover:text-cyan-600 transition-colors">
            Sustentabilidad, Territorio y Gobernanza
          </span>
          {/* Opcional: Un pequeño subtítulo si lo requiere el manual de marca */}
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            CEDES - UNACH
          </span>
        </div>
      </Link>
    </div>
  );
};