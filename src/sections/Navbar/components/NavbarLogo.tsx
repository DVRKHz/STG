export const NavbarLogo = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center gap-y-5 w-4/5 p-2.5 md:flex-nowrap md:w-1/5">
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-left">
        <div className="box-border caret-transparent h-full">
          <a
            href="/quienessomos"
            className="text-black box-border caret-transparent inline-block md:text-pink-600 hover:text-slate-700 hover:border-slate-700"
          >
            <img
              src="/logo-cedes.png"
              alt="Logo"
              sizes="(max-width: 100px) 100vw, 100px"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-gray-800">
                Sustentabilidad, Territorio y Gobernanza
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};