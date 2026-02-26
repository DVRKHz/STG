import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ReportSection } from "@/sections/ReportSection";

export const Acciones = () => {
  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 bg-[url('https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-Ian-Drysdale-1024x768.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col mt-0 max-w-full min-h-[400px] w-full bg-center mb-[0%] mx-[0%] px-[10%] pt-[150px] md:min-h-[600px] md:mx-auto md:my-0 md:pt-[250px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[0%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
              <h1 className="text-white text-[40px] font-semibold box-border caret-transparent leading-[48px] font-plus_jakarta_sans md:text-[72px] md:leading-[86px]">
                Acciones
              </h1>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="pro">
        <ProjectsSection />
      </div>

      <ReportSection />
    </body>
  );
};