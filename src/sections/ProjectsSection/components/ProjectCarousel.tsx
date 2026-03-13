import { useRef } from 'react';
import { ProjectItem } from '@/sections/ProjectsSection/components/data';

// Definición de la interfaz para las propiedades que recibe el componente
interface Props {
  items: ProjectItem[];
}

export const ProjectCarousel = ({ items = [] }: { items?: ProjectItem[] }) => {
  // Referencia al contenedor que tiene el scroll horizontal (permite manipular el DOM directamente)
  const scrollRef = useRef<HTMLDivElement>(null);

  // Early return: si no hay items, muestra un mensaje de carga
  if (!items || items.length === 0) {
    return <div className="p-10 text-center">Cargando mas acciones y proyectos...</div>
  }

  // Función para desplazar el carrusel lateralmente
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Obtenemos el ancho visible del contenedor para saber cuánto desplazar
      const { clientWidth } = scrollRef.current;
      // Calculamos la distancia: negativa para izquierda, positiva para derecha
      const moveDistance = direction === 'left' ? -clientWidth : clientWidth;
      
      // Ejecutamos el scroll con comportamiento suave (smooth)
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  return (
    // Contenedor principal: relativo para posicionar las flechas y centrado
    <div className="relative group w-full max-w-[1400px] mx-auto px-4 md:px-12">
      
      {/* Botón Izquierdo: Solo visible en pantallas medianas (md) en adelante */}
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-md text-gray-800 w-10 h-10 rounded-full transition-all hidden md:flex items-center justify-center border border-gray-200"
      >
        &#10094;
      </button>

      {/* Contenedor del Scroll: 
          - overflow-x-auto: habilita el scroll horizontal
          - snap-x: activa el "anclaje" para que los elementos se detengan en puntos fijos
          - scrollbar-width-none: (inline style) oculta la barra de scroll visualmente
      */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          // Cada tarjeta de proyecto
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
              {/* Tarjeta con fondo dinámico (item.color) y efecto de elevación al hacer hover */}
              <div className={`${item.color} flex flex-col h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 md:hover:-translate-y-2`}>
                
                {/* Contenedor de Imagen con aspecto de video (16:9) y efecto zoom en hover */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt="Imagen del proyecto"
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 md:group-hover/card:scale-110"
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight line-clamp-3 mb-4">
                    {item.text}
                  </h3>
                  
                  {/* "Call to action" al final de la tarjeta */}
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