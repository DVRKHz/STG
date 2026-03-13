import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    // 'fixed top-0': Mantiene la barra siempre a la vista al hacer scroll.
    // 'z-[999]': Se asegura de que el menú esté por encima del contenido de la página.
    // 'bg-white/80 backdrop-blur-md': Crea un efecto de cristal translúcido muy moderno.
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      
      {/* Contenedor con ancho máximo (max-w-7xl) para que no se estire demasiado en pantallas ultra anchas */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Llama al componente del Logo y nombre del proyecto */}
        <NavbarLogo />

        {/* Contenedor para el menú de escritorio; internamente DesktopMenu se oculta en móviles */}
        <div className="flex items-center">
          <DesktopMenu />
        </div>

        {/* MobileMenu contiene internamente el botón hamburguesa y el menú de pantalla completa */}
        <MobileMenu />
      </div>
    </header>
  );
};