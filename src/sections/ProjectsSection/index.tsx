import { ProjectTabs } from "@/sections/ProjectsSection/components/ProjectTabs";
import { ProjectCarousel } from "@/sections/ProjectsSection/components/ProjectCarousel";

export const ProjectsSection = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 font-plus_jakarta_sans">
      
      {/* WRAPPER DE CONTENIDO: Ancho máximo ajustado para lectura óptima */}
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* ENCABEZADO Y CONTEXTO */}
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-50 border border-lime-200/80 rounded-full">
            <span className="w-2 h-2 rounded-full bg-lime-600 animate-pulse" />
            <span className="text-lime-800 text-xs font-bold uppercase tracking-wider">
              Acciones e Iniciativas
            </span>
          </div>

          <h2 id="projects-heading" className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Acciones Territoriales y CIRES 2026
          </h2>

          <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-3xl">
            En esta sección podrás conocer las acciones territoriales e información sobre el{" "}
            <strong className="text-zinc-900 font-semibold">
              Coloquio Internacional Restauración Ecológica y Sustentabilidad (CIRES 2026)
            </strong>{" "}
            que en <span className="text-cyan-700 font-bold">Sustentabilidad, Territorio y Gobernanza</span> hemos impulsado y llevado a cabo en el Sureste de México.
          </p>
        </header>

        {/* ZONA INTERACTIVA: PESTAÑAS Y CARRUSEL */}
        <div 
          className="w-full space-y-6 pt-2" 
          aria-labelledby="projects-heading"
        >
          {/* Componente de Pestañas (Filtros por Línea de Acción) */}
          <ProjectTabs />

          {/* Contenedor del Carrusel o Malla de Tarjetas */}
          <div className="w-full focus:outline-none" role="tabpanel">
            <ProjectCarousel />
          </div>
        </div>

      </div>
    </section>
  );
};