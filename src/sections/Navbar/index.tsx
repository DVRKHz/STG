import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <header className="fixed bg-white shadow-[rgba(0,0,0,0.5)_0px_0px_10px_-4px] box-border caret-transparent flex flex-col max-w-full w-screen z-[999] mx-[0%] px-0 top-0 md:bg-white/95 md:backdrop-blur-md md:shadow-[rgba(0,0,0,0.1)_0px_2px_10px] md:px-2.5">
      <div className="box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-0 w-full mx-auto py-0 md:max-w-[1400px] md:py-2.5">
        <NavbarLogo />
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center gap-y-5 w-1/5 p-2.5 md:flex-nowrap md:w-[65%]">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent flex flex-col h-full">
              <DesktopMenu />
              <MobileMenuToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};