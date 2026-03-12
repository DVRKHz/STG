import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ReportSection } from "@/sections/ReportSection";

export const Acciones = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[65vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        {/* Optimizamos la ruta de la imagen eliminando 'public/' y usamos un placeholder de color para el CLS */}
        <div 
          className="absolute inset-0 bg-gray-900 bg-[url('/acciones-hero.jpg')] bg-no-repeat bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          aria-hidden="true"
        />
        {/* Overlay simplificado con Tailwind nativo */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50" aria-hidden="true" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tight drop-shadow-lg">
            Acciones
          </h1>
          {/* Añadimos un pequeño divisor visual para jerarquía */}
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-6 rounded-full md:w-24"></div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Usamos scroll-mt para que al navegar al ID el Navbar no tape el título */}
      <main id="pro" className="scroll-mt-20">
        <ProjectsSection />
      </main>

      <ReportSection />
    </div>
  );
};