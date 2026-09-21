import { ProjectTabs } from "@/sections/ProjectsSection/components/ProjectTabs";
import { ProjectCarousel } from "@/sections/ProjectsSection/components/ProjectCarousel";

export const ProjectsSection = () => {
  return (
    /* CONTENEDOR EXTERIOR */
    <section className="relative w-full px-[5%] md:px-0">
      
      {/* WRAPPER DE CONTENIDO: Max-width 1140px for desktop readability */}
      <div className="mx-auto max-w-[767px] md:max-w-[1140px] py-[6%] flex flex-col gap-y-[30px]">
        
        {/* ENCABEZADO */}
        <header className="text-left">
          <p className="text-lime-600 text-xl font-semibold tracking-[2px] leading-5 font-plus_jakarta_sans uppercase">
            Acciones y CIRES 2026
          </p>
        </header>

        {/* DESCRIPCIÓN */}
        <div className="font-plus_jakarta_sans md:pr-[26%]">
          <p className="text-zinc-700 leading-relaxed">
            En esta sección podrás conocer las acciones territoriales e información sobre el 
            <strong> Coloquio Internacional Restauración Ecológica y Sustentabilidad (CIRES 2026) </strong> 
            que en <strong>Sustentabilidad, Territorio y Gobernanza</strong> se han impulsado y llevado a cabo...
          </p>
        </div>

        {/* ZONA INTERACTIVA */}
        <div className="w-full">
          <div className="flex flex-col gap-y-0 md:gap-y-[30px]" aria-label="Pestañas de proyectos">
            
            {/* Lógica de Pestañas */}
            <ProjectTabs />

            {/* Panel de Contenido */}
            <div className="w-full" role="tabpanel">
               <ProjectCarousel />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};