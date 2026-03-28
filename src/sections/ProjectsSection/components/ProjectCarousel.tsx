import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// 1. Interfaz actualizada para soportar los nuevos campos
export interface ProjectItem {
  id: number;
  title: string;      // Nombre corto del proyecto
  location: string;   // Ubicación (ej: Tuxtla Gutiérrez)
  category: string;   // Fecha o Categoría (para el Tag)
  text: string;       // Descripción larga (se oculta/revela)
  img: string;        // Ruta de la imagen
  link: string;       // Enlace de la tarjeta (Facebook)
  tagColor?: string;  // Color personalizado para el tag (opcional)
}

interface Props {
  items: ProjectItem[];
}

export const ProjectCarousel = ({ items = [] }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveDistance = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) {
    return <div className="p-10 text-center text-zinc-400 font-medium">Cargando proyectos...</div>;
  }

  return (
    <div className="relative group w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12">
      
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[4px] uppercase">
            Nuestras Acciones
          </h2>
          <p className="text-zinc-500 text-sm md:text-base italic max-w-xl">
            Proyectos e iniciativas enfocadas en la resiliencia y el desarrollo territorial.
          </p>
        </div>
        
        <div className="flex gap-3 self-end md:self-auto">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 shadow-sm transition-all"><ChevronLeft className="w-5 h-5 text-zinc-600" /></button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 shadow-sm transition-all"><ChevronRight className="w-5 h-5 text-zinc-600" /></button>
        </div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div key={item.id} className="shrink-0 w-[88vw] sm:w-[45vw] md:w-[31.5%] snap-center group/card">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-md transition-all duration-500 md:hover:shadow-2xl md:hover:shadow-cyan-900/20"
            >
              {/* TAG */}
              <div className="absolute top-6 left-6 z-20">
                <span className={`${item.tagColor || 'bg-cyan-600/90'} backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-sm`}>
                  {item.category}
                </span>
              </div>

              {/* IMAGEN: En móvil quitamos el desenfoque para que siempre se vea nítida */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out md:group-hover/card:scale-110 md:group-hover/card:blur-[4px]"
              />
              
              {/* CAPA DE DEGRADADO: Más oscura en móvil por defecto para asegurar legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:via-black/20 md:opacity-80 md:group-hover/card:opacity-95 transition-opacity duration-500" />

              {/* CONTENIDO PRINCIPAL */}
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end text-white">
                
                {/* SECCIÓN TÍTULO: En móvil no se desplaza */}
                <div className="transition-transform duration-500 ease-out md:group-hover/card:-translate-y-4">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2px]">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* SECCIÓN REVELABLE: Adaptada para móvil */}
                <div className={`
                  /* Móvil: Visible pero con límite de líneas */
                  opacity-100 mt-4 max-h-[120px] 
                  /* Desktop: Se oculta y revela con hover */
                  md:max-h-0 md:group-hover/card:max-h-[220px] md:opacity-0 md:group-hover/card:opacity-100 md:mt-0 md:group-hover/card:mt-6 
                  transition-all duration-700 ease-in-out border-t border-white/10 pt-4 md:pt-0 md:group-hover/card:pt-6
                `}>
                  
                  {/* Texto con límite de líneas para no romper la estética en móvil */}
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-line-clamp-4 mb-4 md:mb-6 font-medium">
                    {item.text}
                  </p>
                  
                  <div className="flex items-center justify-between group/link">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[2px] text-white/80">
                      Ver en Facebook
                    </span>
                    <div className="bg-cyan-500 p-1.5 md:p-2 rounded-full transform transition-transform duration-300 md:group-hover/link:translate-x-2">
                      <ChevronRight className="w-3.5 h-3.5 md:w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};