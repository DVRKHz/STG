import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const InformacionRelevante = () => {
  return (
    // Contenedor principal: min-h-screen asegura que el fondo cubra toda la pantalla.
    // selection:bg-cyan-100 personaliza el color de resaltado cuando el usuario selecciona texto.
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />
      
      {/* SECCIÓN HERO: Encabezado visual impactante con imagen de fondo y overlay oscuro */}
      <section className="relative h-[40vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gray-800 bg-[url('/informacionrelevante-hero.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tight">
            Información Relevante
          </h1>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: Organizado en un contenedor con espaciado vertical (space-y-16) */}
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-5xl space-y-16">
        
        {/* Sub-sección: Publicaciones Recientes */}
        {/* Muestra un estado "vacío" o de aviso cuando no hay novedades actuales */}
        <section className="space-y-6">
          <h2 className="text-cyan-600 text-sm md:text-base font-bold tracking-[3px] uppercase">
            Publicaciones Recientes
          </h2>
          <div className="bg-zinc-50 border-l-4 border-cyan-500 p-6 md:p-10 rounded-r-lg">
            <p className="text-lg md:text-xl text-zinc-600 italic leading-relaxed">
              "Actualmente no hay publicaciones. Por favor, revisa esta página regularmente para conocer nuevas convocatorias y colaboraciones."
            </p>
          </div>
        </section>

        {/* Sub-sección: Publicaciones Anteriores (Histórico) */}
        <section className="space-y-10">
          <h2 className="text-lime-700 text-sm md:text-base font-bold tracking-[3px] uppercase">
            Publicaciones Anteriores
          </h2>

          {/* Grid de una sola columna para listar las tarjetas de publicaciones pasadas */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <PostCard 
              borderColor="border-cyan-500"
              title="Programa de Fortalecimiento de Capacidades 2024"
              date="31 de diciembre de 2024"
              desc="Convocatoria dirigida a organizaciones de la sociedad civil del Sureste de México..."
              location="Tuxtla Gutiérrez"
              tag="OSCs"
            />
            
            <PostCard 
              borderColor="border-lime-600"
              title="Proyectos de Conservación Marina 2023"
              date="30 de noviembre de 2023"
              desc="Financiamiento para proyectos comunitarios enfocados en la conservación..."
              location="Tapachula"
              tag="Conservación Marina"
            />

            <PostCard 
              borderColor="border-blue-900"
              title="Liderazgo SAM - Generación 2023"
              date="15 de marzo de 2023"
              desc="Programa de formación de líderes en conservación del Sistema Arrecifal Mesoamericano..."
              location="Comitán"
              tag="Formación"
            />
          </div>
        </section>
      </main>

      {/* Footer / Sección de reportes final */}
      <ReportSection />
    </div>
  );
};

/**
 * COMPONENTE PostCard
 * Se encarga de renderizar cada tarjeta de publicación de forma consistente.
 * Recibe props para personalizar el color del borde, el contenido y las etiquetas.
 */
const PostCard = ({ borderColor, title, date, desc, location, tag }) => (
  <article className={`border-l-4 ${borderColor} pl-5 md:pl-8 py-6 bg-white shadow-sm border-y border-r border-zinc-100 rounded-r-xl hover:shadow-md transition-all group`}>
    <div className="flex flex-col gap-2">
      {/* Fecha de la publicación */}
      <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{date}</span>
      
      {/* Título con efecto de cambio de color al pasar el mouse (hover) sobre la tarjeta */}
      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-cyan-600 transition-colors">
        {title}
      </h3>
      
      {/* Descripción corta de la publicación */}
      <p className="text-zinc-600 leading-relaxed text-sm md:text-base my-2">
        {desc}
      </p>
      
      {/* Etiquetas de información (Localización y Categoría) */}
      <div className="flex flex-wrap gap-4 mt-2">
        <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
          <span>📍</span> {location}
        </div>
        <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-lime-700 bg-lime-50 px-3 py-1 rounded-full">
          <span>👥</span> {tag}
        </div>
      </div>
    </div>
  </article>
);