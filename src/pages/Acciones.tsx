import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { FooterSection } from "@/sections/FooterSection";

export const Acciones = () => {
  return (
    // Contenedor principal con altura mínima de pantalla, fondo blanco y fuente personalizada
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans">
      
      {/* 1. Navegación superior */}
      <Navbar />
      
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden group">
  
        {/* Imagen de fondo con escala persistente al hacer hover en la sección */}
        <div 
          className="absolute inset-0 bg-gray-900 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          style={{
            backgroundImage: "url('/acciones-hero.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />
  
        {/* Overlay dinámico: Más oscuro abajo para fundirse con la siguiente sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true" />

        {/* Contenido con animaciones de entrada */}
        <div className="relative z-10 container mx-auto px-6 text-center">
    
          {/* Adorno visual: Una línea sutil que refuerza la marca */}
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full animate-pulse" />

          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
            Acciones
          </h1>
    
          <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
            "Observa los cambios que hemos hecho"
          </p>

          {/* Scroll Indicator (Opcional, para guiar al usuario) */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
          </div>
        </div>
      </section>

      {/* 3. Main Content: Sección de Proyectos */}
      {/* scroll-mt-20: Evita que al usar un enlace al ID #pro, el Navbar (si es fijo) tape el inicio de la sección */}
      <main id="pro" className="scroll-mt-20">
        <ProjectsSection />
      </main>

      {/* 4. Sección del Footer */}
      <FooterSection />
      
    </div>
  );
};