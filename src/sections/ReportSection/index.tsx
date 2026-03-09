export const ReportSection = () => {
  return (
    <div className="relative bg-blue-900 box-border caret-transparent gap-x-5 flex flex-col flex-wrap max-w-full gap-y-5 w-full mx-auto p-[5%] md:flex-nowrap md:p-[45px]">
      <div className="relative content-start box-border caret-transparent gap-x-0 flex flex-wrap gap-y-0 w-full p-0 md:p-2.5">
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-full p-2.5 md:flex-nowrap md:w-1/5">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-left">
            <div className="box-border caret-transparent h-full">
              <a
                href="https://cedes.unach.mx/"
                className="text-pink-600 box-border caret-transparent inline-block hover:text-slate-700 hover:border-slate-700"
              >
                <img
                  src="/logo-cedes-bn.png"
                  alt="Logo"
                  sizes="(max-width: 345px) 100vw, 120px"
                  className="aspect-[auto_345_/_141] box-border caret-transparent inline-block grayscale-[1] brightness-[100] max-w-full w-[120px]"
                />
              </a>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="text-[0px] box-border caret-transparent h-full leading-[0px] text-center md:text-left">
              <div
                role="list"
                className="box-border caret-transparent gap-x-3.5 inline-block justify-center justify-items-center gap-y-0 text-center w-full md:text-left"
              >
                <span
                  role="listitem"
                  className="box-border caret-transparent inline-block text-center md:text-left"
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=61587006117007"
                    className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
                  >
                    <img
                      src="/facebook.svg"
                      alt="Icon"
                      className="relative box-border caret-transparent h-5 w-5 invert brightness-200"
                    />
                  </a>
                </span>
                <span
                  role="listitem"
                  className="box-border caret-transparent inline-block text-center md:text-left"
                >
                  <a
                    href="#"
                    className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
                  >
                    <img
                      src="/x.svg"
                      alt="Icon"
                      className="relative box-border caret-transparent h-5 w-5 invert brightness-200"
                    />
                  </a>
                </span>
                <span
                  role="listitem"
                  className="box-border caret-transparent inline-block text-center md:text-left"
                >
                  <a
                    href="#"
                    className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
                  >
                    <img
                      src="/instagram.svg"
                      alt="Icon"
                      className="relative box-border caret-transparent h-5 w-5 invert brightness-200"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
         </div>
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-6/12 p-2.5 md:flex-nowrap md:w-1/5 md:p-5">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <p className="text-white font-medium box-border caret-transparent leading-4 font-plus_jakarta_sans">
                Nosotros
              </p>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <ul className="box-border caret-transparent list-none pl-0">
                <li className="relative items-center box-border caret-transparent flex pb-[5px]">
                  <a
                    href="/quienessomos"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Acerca de Nosotros
                    </span>
                  </a>
                </li>
                <li className="relative items-center box-border caret-transparent flex mt-[5px] pb-[5px]">
                  <a
                    href="/quienessomos#nuestro-equipo"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Equipo
                    </span>
                  </a>
                </li>
                <li className="relative items-center box-border caret-transparent flex mt-[5px]">
                  <a
                    href="https://www.cedes.unach.mx/index.php/convocatoria"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Convocatorias
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-6/12 p-2.5 md:flex-nowrap md:w-1/5 md:p-5">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <p className="text-white font-medium box-border caret-transparent leading-4 font-plus_jakarta_sans">
                Nuestro trabajo
              </p>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <ul className="box-border caret-transparent list-none pl-0">
                <li className="relative items-center box-border caret-transparent flex pb-[5px]">
                  <a
                    href="https://surestesostenible.org/nuestro-trabajo/#pro"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Proyectos y Programas
                    </span>
                  </a>
                </li>
                <li className="relative items-center box-border caret-transparent flex mt-[5px] pb-[5px]">
                  <a
                    href="https://surestesostenible.org/#impactos"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Impactos
                    </span>
                  </a>
                </li>
                <li className="relative items-center box-border caret-transparent flex mt-[5px]">
                  <a
                    href="https://surestesostenible.org/creditos/"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Créditos de fotografías
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-6/12 p-2.5 md:flex-nowrap md:w-1/5 md:p-5">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <p className="text-white font-medium box-border caret-transparent leading-4 font-plus_jakarta_sans">
                Transparencia
              </p>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <ul className="box-border caret-transparent list-none pl-0">
                <li className="relative items-center box-border caret-transparent flex">
                  <a
                    href="https://transparencia.unach.mx/"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Unidad de Tranparencia
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-6/12 p-2.5 md:flex-nowrap md:w-1/5 md:p-5">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <p className="text-white font-medium box-border caret-transparent leading-4 font-plus_jakarta_sans">
                Ayuda
              </p>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
            <div className="box-border caret-transparent h-full">
              <ul className="box-border caret-transparent list-none pl-0">
                <li className="relative items-center box-border caret-transparent flex pb-[5px]">
                  <a
                    href="/contacto"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Contacto
                    </span>
                  </a>
                </li>
                <li className="relative items-center box-border caret-transparent flex mt-[5px]">
                  <a
                    href="https://www.unach.mx/avisos-de-privacidad"
                    className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                  >
                    <span className="text-white box-border caret-transparent block">
                      Avisos de Privacidad
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 w-full">
        <div className="box-border caret-transparent h-full">
          <div className="box-border caret-transparent flex text-center py-2">
            <span className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-cyan-500 box-border caret-transparent flex w-4/5 mx-auto border-t"></span>
          </div>
        </div>
      </div>
      <div className="relative text-white box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center font-plus_jakarta_sans">
        <div className="box-border caret-transparent h-full">
          <p className="box-border caret-transparent mb-[14.4px]">
            © 2026 Universidad Autónoma de Chiapas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};