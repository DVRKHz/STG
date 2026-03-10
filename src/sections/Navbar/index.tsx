import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <NavbarLogo />

        <div className="flex items-center">
          <DesktopMenu />
          <MobileMenuToggle />
        </div>

        {/* El menú móvil suele ir fuera del flujo principal o absoluto */}
        <MobileMenu />
      </div>
    </header>
  );
};