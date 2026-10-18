import { ProjectTabs } from "@/sections/ProjectsSection/components/ProjectTabs";
import { ProjectCarousel } from "@/sections/ProjectsSection/components/ProjectCarousel";

export const ProjectsSection = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 font-plus_jakarta_sans">
      
      {/* WRAPPER DE CONTENIDO: Ancho máximo ajustado para lectura óptima */}
      <div className="mx-auto max-w-6xl space-y-8">

        {/* ZONA INTERACTIVA: PESTAÑAS Y CARRUSEL */}
        <div 
          className="w-full space-y-6 pt-2"
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