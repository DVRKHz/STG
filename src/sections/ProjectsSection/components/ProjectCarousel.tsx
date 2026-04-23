import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// 1. Interfaz del Proyecto
export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  category: string;
  text: string;
  img: string;
  link: string;
  tagColor?: string;
}

interface Props {
  items?: ProjectItem[];
}

export const ProjectCarousel = ({ items = [] }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasItems = items && items.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        
        if (maxScrollLeft <= 0) return;

        const scrollFraction = scrollLeft / maxScrollLeft;
        const index = Math.round(scrollFraction * (items.length - 1));
        
        setActiveIndex(index);
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll, { passive: true });
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Ajustamos la distancia de scroll para que coincida con tarjetas más grandes
      const moveDistance = direction === 'left' ? -clientWidth / 1.2 : clientWidth / 1.2;
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  const scrollToItem = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const targetScroll = (index / (items.length - 1)) * maxScrollLeft;
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  if (!hasItems) return null;

  return (
    <div className="relative group w-full max-w-[1600px] mx-auto px-4 md:px-16 py-8">
      
      {/* FLECHAS DE NAVEGACIÓN */}
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 
                   p-4 rounded-full border border-zinc-200 bg-white/90 backdrop-blur-sm 
                   shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-cyan-600" />
      </button>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 
                   p-4 rounded-full border border-zinc-200 bg-white/90 backdrop-blur-sm 
                   shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-cyan-600" />
      </button>

      {/* CONTENEDOR DEL CARRUSEL - Aumentamos el GAP */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          /* CAMBIO: md:w-[450px] para dar más ancho y shrink-0 para evitar que colapsen */
          <div key={item.id} className="shrink-0 w-[85vw] sm:w-[50vw] md:w-[450px] snap-center group/card">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              /* CAMBIO: aspect-[3/4] es más ancho que el 4/5 original */
              className="block relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-md transition-all duration-500 md:hover:shadow-2xl md:hover:shadow-cyan-900/20"
            >
              {/* TAG / CATEGORÍA */}
              <div className="absolute top-6 left-6 z-20">
                <span className={`${item.tagColor || 'bg-cyan-600/90'} backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-sm`}>
                  {item.category}
                </span>
              </div>

              {/* IMAGEN DE FONDO */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out md:group-hover/card:scale-110 md:group-hover/card:blur-[2px]"
              />
              
              {/* DEGRADADO */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500" />

              {/* CONTENIDO DE TEXTO */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <div className="transition-transform duration-500 ease-out md:group-hover/card:-translate-y-4">
                  <div className="flex items-center gap-2 mb-3 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[2px]">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* SECCIÓN REVELABLE - Ajustada para mayor capacidad de texto */}
                <div className="opacity-100 mt-4 max-h-[150px] md:max-h-0 md:group-hover/card:max-h-[300px] md:opacity-0 md:group-hover/card:opacity-100 md:mt-0 md:group-hover/card:mt-6 transition-all duration-700 ease-in-out border-t border-white/10 pt-4 md:pt-0 md:group-hover/card:pt-6">
                  {/* CAMBIO: line-clamp-6 para que quepa más texto largo */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed line-clamp-5 md:line-clamp-6 mb-6 font-medium">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-between group/link">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[2px] text-white/80">
                      Ver en Facebook
                    </span>
                    <div className="bg-cyan-500 p-2 md:p-2.5 rounded-full transition-transform md:group-hover/link:translate-x-1">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* INDICADORES (DOTS) */}
      <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToItem(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'w-8 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]' 
                : 'w-2 bg-zinc-300'
            }`}
            aria-label={`Ir al proyecto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};