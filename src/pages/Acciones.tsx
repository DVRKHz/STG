import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ReportSection } from "@/sections/ReportSection";

export const Acciones = () => {
  return (
    // Contenedor principal con altura mínima de pantalla, fondo blanco y fuente personalizada
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans">
      
      {/* 1. Navegación superior */}
      <Navbar />
      
      {/* 2. Hero Section: La sección de impacto visual al inicio */}
      <section className="relative h-[40vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        
        {/* Capa de imagen de fondo con efecto hover (zoom suave) */}
        <div 
          className="absolute inset-0 bg-gray-900 bg-[url('/acciones-hero.jpg')] bg-no-repeat bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          aria-hidden="true"
        />
        
        {/* Overlay: Una capa oscura semitransparente para que el texto blanco resalte sobre la imagen */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50" aria-hidden="true" />
        
        {/* Contenido del Hero (Título y adorno) */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">
            Acciones
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Observa los cambios que hemos hecho
          </p>
        </div>
      </section>

      {/* 3. Main Content: Sección de Proyectos */}
      {/* scroll-mt-20: Evita que al usar un enlace al ID #pro, el Navbar (si es fijo) tape el inicio de la sección */}
      <main id="pro" className="scroll-mt-20">
        <ProjectsSection />
      </main>

      {/* 4. Sección de Reportes o Informes */}
      <ReportSection />
      
    </div>
  );
};