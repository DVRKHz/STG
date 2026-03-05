import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const InformacionRelevante = () => {
  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-700 bg-[url('public/informacionrelevante-hero.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col mt-0 max-w-full min-h-[400px] w-full bg-center mb-[0%] mx-[0%] px-[10%] pt-[150px] md:min-h-[600px] md:mx-auto md:my-0 md:pt-[250px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[0%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
              <h1 className="text-white text-[40px] font-semibold box-border caret-transparent leading-[48px] font-plus_jakarta_sans md:text-[72px] md:leading-[86px]">
                Información Relevante
              </h1>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-[5%] md:px-[0%]">
        <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[50px] w-full mx-auto py-[8%] md:flex-nowrap md:max-w-[min(100%,1140px)] md:py-[6%]">
          
          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-cyan-500 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-6 font-plus_jakarta_sans">
                PUBLIACACIONES RECIENTES
              </h2>
              <div className="bg-gray-50 border-l-4 border-cyan-500 p-8">
                <p className="text-black text-[18px] box-border caret-transparent leading-[32px] mb-[14.4px] font-plus_jakarta_sans">
                  Actualmente no hay publicaciones. Por favor, revisa esta página regularmente para conocer nuevas publicaciones de colaboración.
                </p>
              </div>
            </div>
          </div>

          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-lime-600 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-8 font-plus_jakarta_sans">
                PUBLICACIONES ANTERIORES
              </h2>

              <div className="space-y-8">
                {/* Publicación 1 */}
                <div className="border-l-4 border-cyan-500 pl-8 py-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-black text-[22px] font-semibold box-border caret-transparent font-plus_jakarta_sans">
                      Programa de Fortalecimiento de Capacidades 2024
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[14px] box-border caret-transparent mb-3 font-plus_jakarta_sans">
                    Fecha: 31 de diciembre de 2024
                  </p>
                  <p className="text-black text-[16px] box-border caret-transparent leading-[28px] mb-4 font-plus_jakarta_sans">
                    Convocatoria dirigida a organizaciones de la sociedad civil del Sureste de México para participar en programas de fortalecimiento institucional y desarrollo de capacidades en gestión de proyectos de conservación.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-cyan-500 font-medium">📍 Tuxtla Gutiérrez</span>
                    <span className="text-lime-600 font-medium">👥 OSCs</span>
                  </div>
                </div>

                {/* Publicación 2 */}
                <div className="border-l-4 border-lime-600 pl-8 py-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-black text-[22px] font-semibold box-border caret-transparent font-plus_jakarta_sans">
                      Proyectos de Conservación Marina 2023
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[14px] box-border caret-transparent mb-3 font-plus_jakarta_sans">
                    Feccha: 30 de noviembre de 2023
                  </p>
                  <p className="text-black text-[16px] box-border caret-transparent leading-[28px] mb-4 font-plus_jakarta_sans">
                    Financiamiento para proyectos comunitarios enfocados en la conservación y restauración de ecosistemas marinos en el Sistema Arrecifal Mesoamericano, con énfasis en zonas de refugio pesquero.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-cyan-500 font-medium">📍 Tapachula</span>
                    <span className="text-lime-600 font-medium">🌊 Conservación Marina</span>
                  </div>
                </div>

                {/* Publicación 3 */}
                <div className="border-l-4 border-blue-900 pl-8 py-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-black text-[22px] font-semibold box-border caret-transparent font-plus_jakarta_sans">
                      Liderazgo SAM - Generación 2023
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[14px] box-border caret-transparent mb-3 font-plus_jakarta_sans">
                    Fecha: 15 de marzo de 2023
                  </p>
                  <p className="text-black text-[16px] box-border caret-transparent leading-[28px] mb-4 font-plus_jakarta_sans">
                    Programa de formación de líderes en conservación del Sistema Arrecifal Mesoamericano, dirigido a profesionales comprometidos con la sostenibilidad ambiental y el desarrollo comunitario.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-cyan-500 font-medium">📍 Comitán</span>
                    <span className="text-lime-600 font-medium">🎓 Formación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ReportSection />
    </body>
  );
};