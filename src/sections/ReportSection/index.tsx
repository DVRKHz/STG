export const ReportSection = () => {
  return (
    <div className="relative bg-blue-900 box-border caret-transparent flex flex-col w-full mx-auto p-[5%] md:p-[45px]">
      <div className="relative flex flex-wrap w-full gap-y-10 md:flex-nowrap md:justify-between md:items-start">
        
        {/* 1. EXTREMO IZQUIERDO: CEDES */}
        <div className="flex flex-col gap-y-5 w-full md:w-auto">
          <div className="text-left">
            <a href="https://cedes.unach.mx/" className="inline-block">
              <img
                src="/logo-cedes-bn.png"
                alt="Logo CEDES"
                className="grayscale-[1] brightness-[100] w-[120px] object-contain"
              />
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-x-3">
            <a href="https://www.facebook.com/unachcedes" className="text-gray-500 hover:text-white border border-transparent hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <img src="/facebook.svg" alt="FB" className="h-5 w-5 invert brightness-200" />
            </a>
            <a href="https://twitter.com/cedesunach" className="text-gray-500 hover:text-white border border-transparent hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <img src="/x.svg" alt="X" className="h-5 w-5 invert brightness-200" />
            </a>
            <a href="https://www.instagram.com/unach.cedes/" className="text-gray-500 hover:text-white border border-transparent hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <img src="/instagram.svg" alt="IG" className="h-5 w-5 invert brightness-200" />
            </a>
          </div>
        </div>

        {/* 2. NOSOTROS */}
        <div className="w-1/2 md:w-auto px-2">
          <p className="text-white font-medium mb-4 font-plus_jakarta_sans">Nosotros</p>
          <ul className="list-none pl-0 space-y-2">
            <li><a href="/quienessomos" className="text-white text-[14px] font-extralight hover:underline">Acerca de Nosotros</a></li>
            <li><a href="/quienessomos#nuestro-equipo" className="text-white text-[14px] font-extralight hover:underline">Equipo</a></li>
            <li><a href="#" className="text-white text-[14px] font-extralight hover:underline">Convocatorias</a></li>
          </ul>
        </div>

        {/* 3. NUESTRO TRABAJO */}
        <div className="w-1/2 md:w-auto px-2">
          <p className="text-white font-medium mb-4 font-plus_jakarta_sans">Nuestro trabajo</p>
          <ul className="list-none pl-0 space-y-2">
            <li><a href="/acciones" className="text-white text-[14px] font-extralight hover:underline">Líneas de acción</a></li>
            <li><a href="/acciones" className="text-white text-[14px] font-extralight hover:underline">Proyectos</a></li>
          </ul>
        </div>

        {/* 4. TRANSPARENCIA */}
        <div className="w-1/2 md:w-auto px-2">
          <p className="text-white font-medium mb-4 font-plus_jakarta_sans">Transparencia</p>
          <ul className="list-none pl-0 space-y-2">
            <li><a href="https://transparencia.unach.mx/" className="text-white text-[14px] font-extralight hover:underline">Unidad de Transparencia</a></li>
          </ul>
        </div>

        {/* 5. AYUDA (NUEVA UBICACIÓN) */}
        <div className="w-1/2 md:w-auto px-2">
          <p className="text-white font-medium mb-4 font-plus_jakarta_sans">Ayuda</p>
          <ul className="list-none pl-0 space-y-2">
            <li><a href="/contacto" className="text-white text-[14px] font-extralight hover:underline">Contacto</a></li>
            <li><a href="https://www.unach.mx/avisos-de-privacidad" className="text-white text-[14px] font-extralight hover:underline">Avisos de Privacidad</a></li>
          </ul>
        </div>

        {/* 6. EXTREMO DERECHO: UNACH */}
        <div className="flex flex-col gap-y-5 w-full md:w-auto md:items-end">
          <div className="text-center md:text-right">
            <a href="https://unach.mx/" className="inline-block">
              <img
                src="/unach-logo.png"
                alt="Logo UNACH"
                className="grayscale-[1] brightness-[100] w-[120px] object-contain"
              />
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-x-3">
            <a href="https://www.facebook.com/comunicaunach" className="text-gray-500 hover:text-white border border-transparent hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <img src="/facebook.svg" alt="FB" className="h-5 w-5 invert brightness-200" />
            </a>
            <a href="https://www.instagram.com/unach_oficial" className="text-gray-500 hover:text-white border border-transparent hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <img src="/instagram.svg" alt="X" className="h-5 w-5 invert brightness-200" />
            </a>
          </div>
        </div>
      </div>

      {/* SEPARADOR Y COPYRIGHT */}
      <div className="w-full mt-10">
        <div className="border-t border-t-cyan-500 opacity-30 w-full mb-6"></div>
        <p className="text-white text-center text-sm font-plus_jakarta_sans">
          © 2026 Universidad Autónoma de Chiapas. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};