export const ReportSection = () => {
  return (
    <footer className="relative bg-[#0a192f] overflow-hidden">
      {/* Sutil resplandor de fondo para profundidad */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* GRID PRINCIPAL: 6 columnas para control total de simetría */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 items-start">
          
          {/* 1. SECCIÓN IZQUIERDA: CEDES + NOMBRE COMPLETO */}
          <div className="col-span-2 flex flex-col items-center md:items-start space-y-4">
            <a href="https://cedes.unach.mx/" className="transition-transform hover:scale-105 duration-300">
              <img
                src="/logo-cedes-bn.png"
                alt="Logo CEDES"
                className="grayscale brightness-[100] w-[140px] md:w-[120px] object-contain"
              />
            </a>
            <p className="text-gray-400 text-[11px] md:text-[12px] uppercase tracking-wider text-center md:text-left leading-tight font-medium max-w-[200px]">
              Centro de Estudios para el Desarrollo Municipal y Políticas Públicas
            </p>
            <div className="flex gap-x-3 pt-2">
              <SocialIcon href="https://www.facebook.com/unachcedes" src="/facebook.svg" />
              <SocialIcon href="https://twitter.com/cedesunach" src="/x.svg" />
              <SocialIcon href="https://www.instagram.com/unach.cedes/" src="/instagram.svg" />
            </div>
          </div>

          {/* 2, 3, 4. COLUMNAS CENTRALES DE ENLACES */}
          <FooterColumn title="Nosotros">
            <FooterLink href="/quienessomos">Acerca de Nosotros</FooterLink>
            <FooterLink href="/quienessomos#nuestro-equipo">Equipo</FooterLink>
            <FooterLink href="#">Convocatorias</FooterLink>
          </FooterColumn>

          <FooterColumn title="Trabajo">
            <FooterLink href="/acciones">Líneas de acción</FooterLink>
            <FooterLink href="/acciones">Proyectos</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="https://transparencia.unach.mx/">Transparencia</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="https://www.unach.mx/avisos-de-privacidad">Privacidad</FooterLink>
          </FooterColumn>

          {/* 5. SECCIÓN DERECHA: UNACH + LEMA */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end space-y-4">
            <a href="https://unach.mx/" className="transition-transform hover:scale-105 duration-300">
              <img
                src="/unach-logo.png"
                alt="Logo UNACH"
                className="grayscale brightness-[100] w-[140px] md:w-[120px] object-contain"
              />
            </a>
            <p className="text-gray-400 text-[11px] md:text-[12px] italic text-center md:text-right leading-tight font-light max-w-[180px]">
              "Por la conciencia de la necesidad de servir"
            </p>
            <div className="flex gap-x-3 md:justify-end pt-2">
              <SocialIcon href="https://www.facebook.com/comunicaunach" src="/facebook.svg" />
              <SocialIcon href="https://www.instagram.com/unach_oficial" src="/instagram.svg" />
            </div>
          </div>
        </div>

        {/* LÍNEA FINAL Y COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight text-center">
            © 2026 Universidad Autónoma de Chiapas. <br className="md:hidden" /> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- SUB-COMPONENTES AUXILIARES ---

const FooterColumn = ({ title, children }) => (
  <div className="col-span-1 flex flex-col">
    <h3 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.2em] opacity-80">{title}</h3>
    <ul className="flex flex-col gap-y-3">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 text-[13px] font-normal hover:text-blue-400 hover:translate-x-1 flex items-center transition-all duration-300">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href, src }) => (
  <a href={href} className="group bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500 rounded-lg p-2 transition-all duration-300">
    <img src={src} alt="Social" className="h-4 w-4 invert opacity-60 group-hover:opacity-100 transition-all" />
  </a>
);