import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { FooterSection } from "@/sections/FooterSection";

export const Acciones = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-plus_jakarta_sans selection:bg-cyan-100 scroll-smooth">
      
      {/* 1. Navegación Superior */}
      <Navbar />
      
      {/* 2. Hero Section Portada de Acciones */}
      <section 
        className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden group"
        aria-label="Portada de Acciones y Proyectos"
      >
        {/* Imagen de fondo con Zoom sutil en Hover */}
        <div 
          className="absolute inset-0 bg-gray-900 transition-transform duration-[2000ms] ease-out group-hover:scale-105 blur-[2px]"
          style={{
            backgroundImage: "url('/acciones-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />

        {/* Overlay con gradiente para garantizar contraste WCAG AA del texto */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" 
          aria-hidden="true" 
        />

        {/* Contenido con jerarquía tipográfica optimizada */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Indicador visual de acento de marca */}
          <div className="w-12 h-1 bg-cyan-400 mx-auto mb-4 rounded-full" />

          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
            Acciones e Iniciativas
          </h1>

          <p className="text-zinc-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light italic">
            "Conoce las iniciativas, proyectos de investigación y proyectos de impacto socioambiental que lideramos"
          </p>
        </div>
      </section>

      {/* 3. Main Content: Sección de Proyectos e Impacto */}
      {/* scroll-mt-24 garantiza que la Navbar fija no oculte el título al navegar a #pro */}
      <main id="pro" className="scroll-mt-24 container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-7xl">
        <ProjectsSection />
      </main>

      {/* 4. Footer */}
      <FooterSection />
      
    </div>
  );
};