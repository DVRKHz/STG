import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const InformacionRelevante = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const publicacionesRecientes = [
    {
      title: "¿Por qué nos cuesta tanto elegir productos sostenibles?",
      date: "23 de Marzo de 2026",
      desc: "Estás en el supermercado, vas a buscar tu caja de pasta de siempre, pero al lado ves un producto nuevo. Cuesta 0,80 centavos más, tiene una etiqueta de 'orgánico' y promete un abastecimiento responsable con empaque reciclado. Te importa tomar decisiones más sostenibles, pero... ¿cuál caja eliges?",
      location: "Internacional",
      tag: "Declaración",
      url: "https://es.weforum.org/stories/2026/03/si-los-consumidores-buscan-la-sostenibilidad-por-que-sigue-siendo-tan-dificil-elegirla/",
      imageUrl: "https://assets.weforum.org/article/image/large_N4TC6wKS38YiS36YAuwT-0R3SfFlYYYDq48Zxm3YSkg.avif"
    },
    {
      title: "Investigadores surcoreanos convierten botellas de plástico en nuevos materiales e hidrógeno limpio a solo 100 °C",
      date: "22 de Marzo de 2026",
      desc: "Investigadores de UNIST desarrollan método para reciclar PET a 100 °C y producir hidrógeno limpio y materias primas de alta pureza.",
      location: "Corea del Sur",
      tag: "Investigación",
      url: "https://ecoinventos.com/investigadores-surcoreanos-convierten-botellas-de-plastico-en-nuevos-materiales-y-hidrogeno-limpio-a-solo-100-c/",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/69c/1b6/ffc/69c1b6ffc8087224849025.jpg"
    },
    {
      title: "La economía circular en México es pilar de la política ambiental y modernización industrial: Alicia Bárcena",
      date: "09 de Marzo de 2026",
      desc: "En el marco de la Conferencia Nórdica del SEB, la titular de la Semarnat abordó las propuestas y proyectos impulsados por el Gobierno de México en materia de sostenibilidad, protección a los recursos hídricos, transición energética y cambio climático.",
      location: "México",
      tag: "Comunicado",
      url: "https://www.gob.mx/semarnat/prensa/la-economia-circular-en-mexico-es-pilar-de-la-politica-ambiental-y-modernizacion-industrial-alicia-barcena",
      imageUrl: "https://www.gob.mx/cms/uploads/gallery/main_image/73912/WhatsApp_Image_2026-03-09_at_12.06.58_PM__5_.jpeg"
    },
    {
      title: "La riqueza de los millonarios crece tres veces más rápido en 2025 y alcanza un máximo histórico, con peligrosas consecuencias para la desigualdad política, según Oxfam",
      date: "19 de Enero de 2026",
      desc: "Los milmillonarios tienen 4.000 veces más probabilidades de ocupar un cargo político que la gente corriente.",
      location: "Internacional",
      tag: "Declaración",
      url: "https://www.oxfam.org/es/letters-and-statements/la-riqueza-de-los-milmillonarios-crece-tres-veces-mas-rapido-en-2025-y",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/696/fb1/161/thumb_44_540_0_0_0_auto.png"
    },
    {
      title: "Entra en vigor un tratado internacional sobre los océanos que cambiará las reglas del juego",
      date: "15 de Enero de 2026",
      desc: "Tras casi dos décadas de preparación, un acuerdo internacional para proteger y utilizar de forma sostenible la vida marina en aguas internacionales y en los fondos marinos internacionales entrará en vigor, lo que suppne un importante avance en los esfuerzos por garantizar la salud de los ecosistemas oceánicos durante las próximas décadas.",
      location: "Internacional",
      tag: "Comunicado",
      url: "https://news.un.org/en/story/2026/01/1166762",
      imageUrl: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/27-05-2025-Ocean-Story-04.jpg/image1024x768.jpg"
    }
  ];
  const historico = [
    {
      title: "Por qué la economía circular depende de todos nosotros",
      date: "15 de Diciembre de 2025",
      desc: "La Comisión Europea está redactando en estos momentos la Ley de Economía Circular, que prevé aprobar antes de que finalice 2026",
      location: "Europa",
      tag: "Opinión",
      url: "https://www.expansion.com/opinion/2025/12/15/69401a07468aeb88068b456e.html",
      imageUrl: "https://e01-phantom-expansion.uecdn.es/d7365aac371fa92cc9bed4060de69cae/crop/0x0/2048x1365/resize/828/f/webp/assets/multimedia/imagenes/2022/10/17/16659599710526.jpg"
    },
    {
      title: "En 2024, el Producto Interno Neto Ecológico fue de 25.7 billones de pesos: representó 76.6% del PIB a precios de mercado",
      date: "01 de Diciembre de 2025",
      desc: "El Instituto Nacional de Estadística y Geografía (INEGI) presenta los resultados de las Cuentas Económicas y Ecológicas de México (CEEM) 2024",
      location: "México",
      tag: "Noticia",
      url: "https://www.inegi.org.mx/app/saladeprensa/noticia/10432",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/692/dd9/07f/692dd907f3d33223886111.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />
      
      {/* SECCIÓN HERO */}
      <section className="relative h-[40vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 bg-[url('/informacionrelevante-hero.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">Información Relevante</h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Entérate de la información más precisa
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 md:py-20 max-w-5xl space-y-20">
        
        {/* SECCIÓN: CARRUSEL DE RECIENTES */}
        <section className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div className="space-y-2">
              <span className="text-cyan-600 font-bold tracking-[3px] uppercase text-xs">Lo más nuevo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Publicaciones Recientes</h2>
            </div>
            {/* Controles del Carrusel */}
            <div className="flex gap-2">
              <button onClick={scrollPrev} className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 hover:border-cyan-500 transition-all text-zinc-400 hover:text-cyan-600">
                ←
              </button>
              <button onClick={scrollNext} className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 hover:border-cyan-500 transition-all text-zinc-400 hover:text-cyan-600">
                →
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {publicacionesRecientes.map((post, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_100%] min-w-0">
                  <WideFeaturedCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN: HISTÓRICO (Grid Estilizado) */}
        <section className="bg-zinc-50 py-20 border-y border-zinc-100">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-lime-700 text-sm font-bold tracking-[3px] uppercase shrink-0">Archivo Histórico</h2>
              <div className="h-[1px] w-full bg-lime-200"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {historico.map((post, index) => (
                <HistoryCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ReportSection />
    </div>
  );
};

/** * TARJETA PARA EL CARRUSEL (Vertical y moderna)
 */
const WideFeaturedCard = ({ title, date, desc, location, tag, url, imageUrl }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    // 1. Agregamos transform-gpu e isolate para el fix de esquinas.
    // 2. Agregamos la sombra interna sutil (shadow-[inset_...]).
    // 3. Suavizamos la transición a duration-700 con una curva custom (ease-out-quint).
    className="group relative flex flex-col md:flex-row h-full min-h-[400px] lg:min-h-[450px] 
               rounded-3xl overflow-hidden border border-zinc-100/50 
               shadow-lg shadow-[inset_0_10px_30px_rgba(0,0,0,0.05)] 
               hover:shadow-2xl hover:-translate-y-1.5 
               transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
               cursor-pointer isolate transform-gpu"
    // Fix definitivo para el bug de overflow en esquinas de Chromium (con scale/translate)
    style={{ maskImage: "-webkit-radial-gradient(white, black)" }} 
  >
    {/* 1. IMAGEN DE FONDO COMPLETA */}
    <div className="absolute inset-0 z-0">
      <img 
        src={imageUrl} 
        alt={title} 
        // Suavizamos también la escala de la imagen
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" 
      />
      {/* 2. SUPERPOSICIÓN DE DEGRADADO (Mejorado para dar más aire al texto superior) */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-black/70 to-black/95 z-10" />
    </div>

    {/* Etiqueta (Tag) - Flotando sobre la imagen */}
    <div className="absolute top-6 left-6 z-30 bg-cyan-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg">
      {tag}
    </div>

    {/* 3. CONTENIDO DEL TEXTO */}
    <div className="relative z-20 p-8 md:p-14 lg:p-16 flex flex-col justify-end h-full w-full md:w-3/5 lg:w-2/3 ml-auto text-white">
      <div className="space-y-4 lg:space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-cyan-400"></span>
          <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">{date}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold group-hover:text-cyan-300 transition-colors leading-[1.1] tracking-tight">
          {title}
        </h3>
        
        <p className="text-zinc-100 text-base lg:text-lg leading-relaxed line-clamp-4 md:line-clamp-5">
          {desc}
        </p>
      </div>
      
      <div className="pt-6 mt-8 lg:mt-10 border-t border-white/10 flex justify-between items-center gap-4">
        <div className="flex gap-4">
          <span className="text-sm font-medium text-zinc-300 flex items-center gap-2">
            <span className="text-base">📍</span> {location}
          </span>
        </div>
        <div className="flex items-center gap-2 text-cyan-300 font-bold group-hover:gap-4 transition-all shrink-0">
          <span className="hidden md:inline">Leer artículo completo</span>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </div>
  </a>
);

/**
 * TARJETA PARA EL HISTÓRICO (Horizontal y compacta)
 */
const HistoryCard = ({ title, date, location, url, imageUrl, tag }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative flex gap-5 p-5 bg-white/50 backdrop-blur-sm border border-zinc-100 rounded-2xl 
               hover:bg-white hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1 
               transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
               overflow-hidden isolate transform-gpu"
    style={{ maskImage: "-webkit-radial-gradient(white, black)" }}
  >
    {/* Imagen: Ahora con un tamaño mínimo para no deformarse si el texto es muy largo */}
    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-xl bg-zinc-100 self-start">
      <img 
        src={imageUrl} 
        alt="" 
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" 
      />
      {tag && (
        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[8px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-tighter">
          {tag}
        </div>
      )}
    </div>

    {/* Contenido de Texto: Sin line-clamp para títulos largos */}
    <div className="flex flex-col flex-grow min-w-0">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
          {date}
        </span>
      </div>
      
      {/* Título: Quitamos line-clamp-2 para que quepa todo el texto */}
      <h4 className="font-bold text-zinc-800 group-hover:text-cyan-600 transition-colors text-sm md:text-base leading-snug mb-4">
        {title}
      </h4>

      {/* Footer de la tarjeta */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-[10px] text-zinc-400 font-medium flex items-center gap-1">
          📍 {location}
        </span>
        <span className="text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-xs font-bold flex items-center gap-1">
          Leer <span className="text-lg">→</span>
        </span>
      </div>
    </div>

    {/* Detalle estético: línea de acento */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" />
  </a>
);