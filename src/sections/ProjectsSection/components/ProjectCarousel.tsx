import { useRef } from 'react';
import { ProjectItem } from '@/sections/ProjectsSection/components/data';

interface Props {
  items: ProjectItem[];
}

export const ProjectCarousel = ({ items = []}: { items?: ProjectItem[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!items || items.length === 0) {
    return <div className="p-10 text-center">Cargando mas acciones y proyectos...</div>
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveDistance = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full max-w-[1400px] mx-auto px-4 md:px-12">
      {/* Botón Izquierdo */}
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-md text-gray-800 w-10 h-10 rounded-full transition-all hidden md:flex items-center justify-center border border-gray-200"
      >
        &#10094;
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="shrink-0 w-[85%] md:w-[calc(33.333%-1rem)] snap-center md:snap-start"
          >
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full group/card no-underline"
            >
              <div className={`${item.color} flex flex-col h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 md:hover:-translate-y-2`}>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt="Imagen del proyecto"
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 md:group-hover/card:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight line-clamp-3 mb-4">
                    {item.text}
                  </h3>
                  <div className="mt-auto text-white/90 text-xs font-semibold flex items-center gap-2">
                    Ver más en Facebook <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Botón Derecho */}
      <button 
        onClick={() => scroll('right')} 
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-md text-gray-800 w-10 h-10 rounded-full transition-all hidden md:flex items-center justify-center border border-gray-200"
      >
        &#10095;
      </button>
    </div>
  );
};