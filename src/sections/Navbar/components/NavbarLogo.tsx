import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    // 'flex-shrink-0' es vital para que el logo no se comprima si hay muchos enlaces en el menú
    <div className="flex items-center flex-shrink-0">
      <Link
        to="/"
        // 'group' permite que los cambios de estilo (como el color del texto) se activen 
        // al pasar el mouse por cualquier parte del logo o del texto simultáneamente
        className="flex items-center gap-3 group transition-opacity hover:opacity-90"
      >
        {/* Imagen del Logo:
            - h-10 md:h-12: Ajusta el tamaño según el dispositivo.
            - object-contain: Asegura que la imagen no se deforme.
        */}
        <img
          src="/logo-cedes.png"
          alt="CEDES Logo"
          className="h-10 w-auto object-contain md:h-12"
        />

        {/* Contenedor de Texto:
            - flex-col: Alinea el título y el subtítulo verticalmente.
            - leading-tight: Reduce el espacio entre líneas para que se vea como un bloque sólido.
        */}
        <div className="flex flex-col leading-tight max-w-[180px] md:max-w-none">
          {/* Título del Proyecto:
              - transition-colors: Hace que el cambio al color cian (por la clase group-hover) sea suave.
          */}
          <span className="text-sm font-bold text-gray-800 md:text-base lg:text-lg group-hover:text-cyan-600 transition-colors">
            Sustentabilidad, Territorio y Gobernanza
          </span>
          
          {/* Subtítulo Institucional:
              - text-[10px]: Tamaño pequeño para no competir visualmente con el título principal.
              - tracking-widest: Aumenta el espacio entre letras, una técnica común en diseño para textos en mayúsculas.
          */}
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            CEDES - UNACH
          </span>
        </div>
      </Link>
    </div>
  );
};