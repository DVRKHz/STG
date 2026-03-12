import { ProjectTabs } from "@/sections/ProjectsSection/components/ProjectTabs";
import { ProjectCarousel } from "@/sections/ProjectsSection/components/ProjectCarousel";

export const ProjectsSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mt-0 mx-0 px-[5%] md:mt-0 md:mx-auto md:px-[0%]">
      <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[30px] w-full mx-auto py-[6%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
        <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px] text-left">
          <div className="box-border caret-transparent h-full">
            <p className="text-lime-600 text-xl font-semibold box-border caret-transparent tracking-[2px] leading-5 font-plus_jakarta_sans">
              LÍNEAS DE ACCIÓN Y PROYECTOS
            </p>
          </div>
        </div>
        <div className="relative text-black box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px] font-plus_jakarta_sans">
          <div className="box-border caret-transparent h-full p-[0%] md:pr-[26%]">
            <p className="box-border caret-transparent mb-[14.4px]">
              En esta sección podrás conocer las líneas de acción y proyectos que en Sustentabilidad, Territorio y Gobernanza 
              ha llevado a cabo a lo largo de su historia. Nuestro compromiso con la sustentabilidad se refleja en cada iniciativa que emprendemos, 
              buscando siempre generar un impacto positivo en la sociedad y el medio ambiente. 
              A través de estas líneas de acción y proyectos, trabajamos para promover prácticas sostenibles, fomentar la conciencia ambiental y contribuir al desarrollo sostenible de nuestras comunidades.
            </p>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px] w-full">
          <div className="box-border caret-transparent h-full">
            <div
              aria-label="Pestañas. Abre elementos con Intro o Espacio, ciérralos con Escape y navega con las fechas."
              className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0 md:gap-x-[30px] md:gap-y-[30px]"
            >
              <ProjectTabs />
              <div className="box-border caret-transparent contents grow min-h-0 md:flex md:min-h-[auto]">
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap order-1 gap-y-5 w-full md:flex-nowrap md:order-none"
                >
                  <div className="relative box-border caret-transparent gap-x-5 h-fit max-w-full gap-y-5 w-full">
                    <div className="box-border caret-transparent h-full">
                      <ProjectCarousel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};