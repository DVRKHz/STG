export const DesktopMenu = () => {
  return (
    <nav
      aria-label="Menú"
      className="box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"
    >
      <ul className="relative box-border caret-transparent flex flex-wrap justify-center leading-[normal] list-none min-h-0 min-w-0 z-[2] mx-auto pl-0 md:min-h-[auto] md:min-w-[auto]">
        <li className="relative box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="/quienessomos"
            className="relative text-black font-semibold items-center box-border caret-transparent flex fill-black grow leading-5 min-h-0 min-w-0 text-nowrap px-2.5 py-[13px] font-plus_jakarta_sans md:text-neutral-700 md:fill-neutral-700 md:min-h-[auto] md:min-w-[auto] hover:text-cyan-500 transition-colors"
          >
            Quiénes somos
          </a>
        </li>
        <li className="relative box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="/informacion-relevante"
            className="relative text-black font-semibold items-center box-border caret-transparent flex fill-black grow leading-5 min-h-0 min-w-0 text-nowrap px-2.5 py-[13px] font-plus_jakarta_sans md:text-neutral-700 md:fill-neutral-700 md:min-h-[auto] md:min-w-[auto] hover:text-cyan-500 transition-colors group"
          >
            Información Relevante
            <span className="text-black items-center box-border caret-transparent flex fill-black leading-4 min-h-0 min-w-0 text-nowrap -my-2.5 pl-2.5 py-2.5 md:text-neutral-700 md:fill-neutral-700 md:min-h-[auto] md:min-w-[auto] transition-transform group-hover:rotate-180">
              <img
                src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-1.svg"
                alt="Icon"
                className="text-black box-border caret-transparent h-4 text-nowrap w-4 md:text-neutral-700"
              />
            </span>
          </a>
        </li>
        <li className="relative box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="/acciones"
            className="relative text-black font-semibold items-center box-border caret-transparent flex fill-black grow leading-5 min-h-0 min-w-0 text-nowrap px-2.5 py-[13px] font-plus_jakarta_sans md:text-neutral-700 md:fill-neutral-700 md:min-h-[auto] md:min-w-[auto] hover:text-cyan-500 transition-colors"
          >
            Acciones
          </a>
        </li>
        <li className="relative box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="/contacto"
            className="relative text-black font-semibold items-center box-border caret-transparent flex fill-black grow leading-5 min-h-0 min-w-0 text-nowrap px-2.5 py-[13px] font-plus_jakarta_sans md:text-neutral-700 md:fill-neutral-700 md:min-h-[auto] md:min-w-[auto] hover:text-cyan-500 transition-colors"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};