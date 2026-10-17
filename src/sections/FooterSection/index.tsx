import React from "react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-[#0a192f] text-slate-300 overflow-hidden font-plus_jakarta_sans border-t border-white/5">
      {/* Sutil resplandor ambiental para dar profundidad al fondo oscuro */}
      <div 
        className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* GRID PRINCIPAL: 6 columnas adaptables */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6 items-start">
          
          {/* 1. SECCIÓN IZQUIERDA: CEDES */}
          <div className="col-span-2 flex flex-col items-start space-y-4">
            <a 
              href="https://cedes.unach.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
              aria-label="Ir al sitio de CEDES UNACH"
            >
              <img
                src="/logo-cedes-bn.png"
                alt="Logo CEDES"
                className="grayscale brightness-[100] w-[130px] md:w-[120px] object-contain"
              />
            </a>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium max-w-[210px]">
              Centro de Estudios para el Desarrollo Municipal y Políticas Públicas
            </p>
            
            {/* Íconos Sociales CEDES */}
            <div className="flex items-center gap-2 pt-1">
              <SocialIcon href="https://www.facebook.com/unachcedes" src="/facebook.svg" label="Facebook de CEDES" />
              <SocialIcon href="https://twitter.com/cedesunach" src="/x.svg" label="Twitter / X de CEDES" />
              <SocialIcon href="https://www.instagram.com/unach.cedes/" src="/instagram.svg" label="Instagram de CEDES" />
            </div>
          </div>

          {/* 2, 3, 4. COLUMNAS CENTRALES DE NAVEGACIÓN */}
          <FooterColumn title="Nosotros">
            <FooterLink href="/quienessomos">Acerca de Nosotros</FooterLink>
            <FooterLink href="/quienessomos#equipo">Nuestro Equipo</FooterLink>
            <FooterLink href="/informacion-relevante">Publicaciones</FooterLink>
          </FooterColumn>

          <FooterColumn title="Trabajo">
            <FooterLink href="/acciones">Líneas de Acción</FooterLink>
            <FooterLink href="/acciones#pro">Proyectos</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="https://transparencia.unach.mx/" external>Transparencia</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="https://www.unach.mx/avisos-de-privacidad" external>Avisos de Privacidad</FooterLink>
          </FooterColumn>

          {/* 5. SECCIÓN DERECHA: UNACH Y LEMA */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end space-y-4">
            <a 
              href="https://unach.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
              aria-label="Ir al portal oficial de la UNACH"
            >
              <img
                src="/unach-logo.png"
                alt="Logo UNACH"
                className="grayscale brightness-[100] w-[130px] md:w-[120px] object-contain"
              />
            </a>
            <p className="text-zinc-400 text-[11px] md:text-xs italic text-left md:text-right leading-tight font-light max-w-[190px]">
              "Por la conciencia de la necesidad de servir"
            </p>
            
            {/* Íconos Sociales UNACH */}
            <div className="flex items-center gap-2 md:justify-end pt-1">
              <SocialIcon href="https://www.facebook.com/comunicaunach" src="/facebook.svg" label="Facebook Oficial UNACH" />
              <SocialIcon href="https://www.instagram.com/unach_oficial" src="/instagram.svg" label="Instagram Oficial UNACH" />
            </div>
          </div>

        </div>

        {/* LÍNEA SEPARADORA Y COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <p className="text-center sm:text-left">
            © 2026 Universidad Autónoma de Chiapas. Todos los derechos reservados.
          </p>
          <p className="text-center sm:text-right text-zinc-500">
            Sustentabilidad, Territorio y Gobernanza
          </p>
        </div>

      </div>
    </footer>
  );
};

// --- SUB-COMPONENTES AUXILIARES ---

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="col-span-1 flex flex-col space-y-3">
    <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] text-cyan-400">{title}</h3>
    <ul className="flex flex-col space-y-2">{children}</ul>
  </div>
);

interface LinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

const FooterLink = ({ href, external, children }: LinkProps) => (
  <li>
    <a 
      href={href} 
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-zinc-400 text-xs font-normal hover:text-cyan-300 hover:translate-x-1 inline-flex items-center transition-all duration-200 focus:outline-none focus:text-cyan-300"
    >
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href, src, label }: { href: string; src: string; label: string }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  >
    <img src={src} alt="" className="h-3.5 w-3.5 filter invert opacity-70 group-hover:opacity-100 transition-all" />
  </a>
);