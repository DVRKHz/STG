export const ReportSection = () => {
  return (
    // FOOTER: Fondo azul oscuro, padding responsivo y centrado automático
    <footer className="relative bg-blue-900 box-border flex flex-col w-full mx-auto p-8 md:p-[45px]">
      
      {/* GRID DE CONTENIDO: 
          - 2 columnas en móvil (grid-cols-2).
          - Flex horizontal en escritorio (md:flex) con espacio entre elementos.
      */}
      <div className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-between gap-10 md:gap-x-8 items-start">
        
        {/* 1. SECCIÓN IZQUIERDA: LOGO CEDES
            - col-span-2: En móvil ocupa todo el ancho para centrar el logo.
        */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-y-5 w-full md:w-auto">
          <a href="https://cedes.unach.mx/" className="inline-block">
            <img
              src="/logo-cedes-bn.png"
              alt="Logo CEDES"
              // Filtros para hacer el logo blanco puro sobre el fondo azul
              className="grayscale-[1] brightness-[100] w-[140px] md:w-[120px] object-contain"
            />
          </a>
          <div className="flex justify-center md:justify-start gap-x-4">
            <SocialIcon href="https://www.facebook.com/unachcedes" src="/facebook.svg" alt="FB" />
            <SocialIcon href="https://twitter.com/cedesunach" src="/x.svg" alt="X" />
            <SocialIcon href="https://www.instagram.com/unach.cedes/" src="/instagram.svg" alt="IG" />
          </div>
        </div>

        {/* COLUMNAS DE ENLACES: Mantienen una jerarquía clara con títulos en mayúsculas */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold mb-4 font-plus_jakarta_sans text-sm tracking-wide uppercase">Nosotros</h3>
          <ul className="space-y-3">
            <li><a href="/quienessomos" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Acerca de Nosotros</a></li>
            <li><a href="/quienessomos#nuestro-equipo" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Equipo</a></li>
            <li><a href="#" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Convocatorias</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-bold mb-4 font-plus_jakarta_sans text-sm tracking-wide uppercase">Trabajo</h3>
          <ul className="space-y-3">
            <li><a href="/acciones" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Líneas de acción</a></li>
            <li><a href="/acciones" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Proyectos</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-bold mb-4 font-plus_jakarta_sans text-sm tracking-wide uppercase">Legal</h3>
          <ul className="space-y-3">
            <li><a href="https://transparencia.unach.mx/" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Transparencia</a></li>
            <li><a href="/contacto" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Contacto</a></li>
            <li><a href="https://www.unach.mx/avisos-de-privacidad" className="text-gray-300 text-[14px] font-light hover:text-white transition-colors">Privacidad</a></li>
          </ul>
        </div>

        {/* 6. SECCIÓN DERECHA: LOGO UNACH
            - Sigue el mismo patrón que el logo de la izquierda para balance visual.
        */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end gap-y-5 w-full md:w-auto">
          <a href="https://unach.mx/" className="inline-block">
            <img
              src="/unach-logo.png"
              alt="Logo UNACH"
              className="grayscale-[1] brightness-[100] w-[140px] md:w-[120px] object-contain"
            />
          </a>
          <div className="flex justify-center md:justify-end gap-x-4">
            <SocialIcon href="https://www.facebook.com/comunicaunach" src="/facebook.svg" alt="FB" />
            <SocialIcon href="https://www.instagram.com/unach_oficial" src="/instagram.svg" alt="IG" />
          </div>
        </div>
      </div>

      {/* PIE DE PÁGINA: Separador tenue y copyright */}
      <div className="w-full mt-12">
        <div className="border-t border-white/10 w-full mb-6"></div>
        <p className="text-gray-400 text-center text-xs md:text-sm font-plus_jakarta_sans leading-relaxed">
          © 2026 Universidad Autónoma de Chiapas.<br className="block md:hidden" /> Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

/**
 * SocialIcon: Componente pequeño para los botones de redes sociales.
 * Incluye efectos de hover en el borde y opacidad para mejorar la interacción.
 */
const SocialIcon = ({ href, src, alt }) => (
  <a href={href} className="group border border-white/20 hover:border-white rounded-full p-2 flex items-center justify-center w-10 h-10 transition-all">
    <img src={src} alt={alt} className="h-5 w-5 invert brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" />
  </a>
);