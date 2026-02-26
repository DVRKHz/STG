import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const QuienesSomos = () => {
  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 bg-[url('https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-1-1.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col mt-0 max-w-full min-h-[400px] w-full bg-center mb-[0%] mx-[0%] px-[10%] pt-[150px] md:min-h-[600px] md:mx-auto md:my-0 md:pt-[250px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[0%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
              <h1 className="text-white text-[40px] font-semibold box-border caret-transparent leading-[48px] font-plus_jakarta_sans md:text-[72px] md:leading-[86px]">
                Quiénes Somos
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-[5%] md:px-[0%]">
        <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[50px] w-full mx-auto py-[8%] md:flex-nowrap md:max-w-[min(100%,1140px)] md:py-[6%]">
          
          {/* Mission Section */}
          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-cyan-500 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-6 font-plus_jakarta_sans">
                NUESTRA MISIÓN
              </h2>
              <p className="text-black text-[18px] box-border caret-transparent leading-[32px] mb-[14.4px] font-plus_jakarta_sans">
                Promover la sostenibilidad y resiliencia en el Sureste de México y el Sistema Arrecifal Mesoamericano mediante iniciativas colaborativas y acciones integrales que equilibren la conservación de la biodiversidad con el bienestar humano.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-lime-600 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-6 font-plus_jakarta_sans">
                NUESTRA VISIÓN
              </h2>
              <p className="text-black text-[18px] box-border caret-transparent leading-[32px] mb-[14.4px] font-plus_jakarta_sans">
                Ser una organización líder en la promoción de la sostenibilidad y resiliencia en el Sureste de México y el Sistema Arrecifal Mesoamericano, reconocida por su capacidad de articular esfuerzos colaborativos que generen impactos positivos y duraderos en la conservación de la biodiversidad y el bienestar de las comunidades locales.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-blue-900 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-6 font-plus_jakarta_sans">
                NUESTROS VALORES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-cyan-500 text-3xl flex-shrink-0">●</div>
                  <div>
                    <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                      Colaboración
                    </h3>
                    <p className="text-black text-base box-border caret-transparent leading-[28px] font-plus_jakarta_sans">
                      Trabajamos en alianza con diversos actores para lograr objetivos comunes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-lime-600 text-3xl flex-shrink-0">●</div>
                  <div>
                    <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                      Sostenibilidad
                    </h3>
                    <p className="text-black text-base box-border caret-transparent leading-[28px] font-plus_jakarta_sans">
                      Promovemos prácticas que aseguren el equilibrio entre desarrollo y conservación.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-pink-600 text-3xl flex-shrink-0">●</div>
                  <div>
                    <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                      Transparencia
                    </h3>
                    <p className="text-black text-base box-border caret-transparent leading-[28px] font-plus_jakarta_sans">
                      Operamos con honestidad y rendición de cuentas en todas nuestras acciones.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-900 text-3xl flex-shrink-0">●</div>
                  <div>
                    <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                      Innovación
                    </h3>
                    <p className="text-black text-base box-border caret-transparent leading-[28px] font-plus_jakarta_sans">
                      Buscamos soluciones creativas y efectivas para los desafíos ambientales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]" id="equipo">
            <div className="box-border caret-transparent h-full">
              <h2 className="text-cyan-500 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-10 font-plus_jakarta_sans">
                NUESTRO EQUIPO
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Team Member 1 */}
                <div className="box-border caret-transparent group">
                  <div className="relative box-border caret-transparent overflow-hidden mb-5">
                    <img
                      src="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-1-1.jpg"
                      alt="Team Member"
                      className="aspect-square box-border caret-transparent w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-black text-[20px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                    Nombre del Miembro
                  </h3>
                  <p className="text-gray-600 text-[16px] box-border caret-transparent leading-[24px] font-plus_jakarta_sans">
                    Director/a Ejecutivo/a
                  </p>
                </div>

                {/* Team Member 2 */}
                <div className="box-border caret-transparent group">
                  <div className="relative box-border caret-transparent overflow-hidden mb-5">
                    <img
                      src="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-2-2-1-1024x680.jpg"
                      alt="Team Member"
                      className="aspect-square box-border caret-transparent w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-black text-[20px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                    Nombre del Miembro
                  </h3>
                  <p className="text-gray-600 text-[16px] box-border caret-transparent leading-[24px] font-plus_jakarta_sans">
                    Coordinador/a de Proyectos
                  </p>
                </div>
                {/* Team Member 3 */}
                <div className="box-border caret-transparent group">
                  <div className="relative box-border caret-transparent overflow-hidden mb-5">
                    <img
                      src="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-Ian-Drysdale-1024x768.jpg"
                      alt="Team Member"
                      className="aspect-square box-border caret-transparent w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-black text-[20px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                    Nombre del Miembro
                  </h3>
                  <p className="text-gray-600 text-[16px] box-border caret-transparent leading-[24px] font-plus_jakarta_sans">
                    Especialista en Conservación
                  </p>
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