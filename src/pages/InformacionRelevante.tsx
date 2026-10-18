import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Navbar } from "@/sections/Navbar";
import { FooterSection } from "@/sections/FooterSection";

export const InformacionRelevante = () => {
  // Estado para gestionar el punto activo del carrusel
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Configuración con pausa al hacer hover para no interrumpir la lectura del usuario
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const publicacionesRecientes = [
    {
      title: "Calentamiento en México se acelera: pasó de 3.4 a 5.5 grados por siglo, advierte la UNAM",
      date: "15 de Octubre de 2026",
      desc: "El aumento de la temperatura reduce el margen disponible para que el país haga frente a los impactos climáticos, advierte Francisco Estrada, coordinador del Programa de Investigación en Cambio Climático de la Universidad Nacional Autónoma de México.",
      location: "México",
      tag: "Opinión",
      url: "https://www.cronica.com.mx/nacional/2026/10/15/calentamiento-en-mexico-se-acelera-paso-de-34-a-55-grados-por-siglo-advierte-la-unam/",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/6ad/280/9d3/6ad2809d3f9e6945002533.jpg"
    },
    {
      title: "'El Niño' traerá más olas de calor y mala calidad del aire a CDMX en 2027, alerta la UNAM",
      date: "17 de Septiembre de 2026",
      desc: "El fenómeno de El Niño podría generar condiciones más secas en buena parte del centro de México durante la primavera de 2027, con menos lluvias, riesgo de sequía, incremento de los incendios y más días con mala calidad del aire, de acuerdo con especialistas de la Universidad Nacional Autónoma de México (UNAM).",
      location: "México",
      tag: "Noticia",
      url: "https://www.elfinanciero.com.mx/cdmx/2026/09/17/el-nino-traera-mas-olas-de-calor-y-mala-calidad-del-aire-a-cdmx-en-2027-alerta-la-unam/",
      imageUrl: "https://www.elfinanciero.com.mx/resizer/v2/PVYSBLKW7VATXGXYUEGXFKHAN4.jpeg?smart=true&auth=3f5f47d1ac3fb3961d44318a561a8ceb75c47c20467e322e7ccc30f91e68ca72&width=1200&height=675&quality=85"
    },
    {
      title: "Invertir hoy para obtener beneficios ambientales mañana",
      date: "30 de Julio de 2026",
      desc: "La Ley General de Economía Circular (LGEC) busca articular políticas integrales de alcance nacional. El decreto implica retos económicos, tecnológicos y sociales que deberán enfrentarse de manera gradual, consideró Karina Caballero Güendulain, coordinadora de la Especialización en Economía Ambiental y Ecológica de la Facultad de Economía (FE) de la UNAM.",
      location: "México",
      tag: "Opinión",
      url: "https://www.gaceta.unam.mx/invertir-hoy-para-obtener-beneficios-ambientales-manana/",
      imageUrl: "https://www.gaceta.unam.mx/wp-content/uploads/2026/07/260730-aca4-des-f1-invertir-hoy-para-obtener-beneficios-ambientales-manana.jpg"
    },
    {
      title: "Fondo de Capital Ambiental: clave para la transición ecológica en México",
      date: "22 de Julio de 2026",
      desc: "La naturaleza es la infraestructura sobre la que funciona la economía. Como cimiento de todo lo que construimos, es el sistema vivo que nos proporciona agua, equilibra el clima, asegura nuestros alimentos y hace posible la vida humana. El Foro Económico Mundial estima que más de la mitad del PIB mundial depende, de manera directa o indirecta, de los servicios que brindan los ecosistemas. Paradójicamente, hemos convertido esa misma base natural en uno de los activos más deteriorados de nuestro tiempo.",
      location: "México",
      tag: "Opinión",
      url: "https://www.elfinanciero.com.mx/opinion/colaborador-invitado/2026/07/22/fondo-de-capital-ambiental-clave-para-la-transicion-ecologica-en-mexico/",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/6a6/284/ba0/thumb_55_540_0_0_0_auto.jpg"
    },
    {
      title: "Vienen reglas ambientales más estrictas a favor de Economía Circular",
      date: "09 de Julio de 2026",
      desc: "A través de un comunicado de prensa, la Secretaría de Medio Ambiente y Recursos Naturales, planteó que, con esta iniciativa, se trabajará en la creación de mecanismos enfocados en materia de circularidad para incrementar la vida útil de los productos, aprovechar los residuos y determinar atribuciones para la aplicación de modelos de manera responsable.",
      location: "México",
      tag: "Comunicado",
      url: "https://unamglobal.unam.mx/global_tv/vienen-reglas-ambientales-mas-estrictas-a-favor-de-economia-circular/",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/6a5/16e/ab1/thumb_54_540_0_0_0_auto.jpg"
    },
    {
      title: "Australia inaugura la primera refinería de carbono del mundo que convierte CO₂ en hormigón, pintura y materiales de construcción",
      date: "21 de Junio de 2026",
      desc: "Durante décadas, la industria ha tratado el dióxido de carbono como un problema que había que eliminar, almacenar o compensar. La nueva instalación Myrtle, inaugurada en Australia por la empresa MCi Carbon, plantea una visión completamente distinta: convertir ese CO₂ en una materia prima valiosa.",
      location: "Australia",
      tag: "Noticia",
      url: "https://ecoinventos.com/australia-inaugura-la-primera-refineria-de-carbono-del-mundo-que-convierte-co%E2%82%82-en-hormigon-pintura-y-materiales-de-construccion/",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/6a4/56a/2c8/thumb_53_540_0_0_0_auto.jpg"
    },
    {
      title: "Combinar políticas fiscales y de consumo es clave para avanzar hacia una economía circular",
      date: "13 de Mayo de 2026",
      desc: "Un nuevo estudio sobre economía circular en Europa concluye que la combinación de políticas orientadas tanto a la producción como al consumo resulta necesaria para reducir de forma significativa el uso de materias primas y avanzar hacia modelos económicos más circulares.",
      location: "Europa",
      tag: "Noticia",
      url: "https://www.residuosprofesional.com/politicas-fiscales-consumo-clave-economia-circular/",
      imageUrl: "https://www.residuosprofesional.com/wp-content/uploads/2026/05/pexels-willians-huerta-13526.jpg"
    },
    {
      title: "CeIBA: Un cuarto de siglo",
      date: "10 de Mayo de 2026",
      desc: "CeIBA tiene el objetivo de 'elaborar un programa nacional de alternativa sobre la problemática ecológica y la utilización de los recursos naturales'",
      location: "México",
      tag: "Opinión",
      url: "https://www.jornada.com.mx/noticia/2026/05/10/opinion/ceiba-un-cuarto-de-siglo",
      imageUrl: "https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/ceiba-un-cuarto-de-siglo/ceiba-un-cuarto-de-siglo_a381dd74-e7f5-453d-a06d-ea72ce0e746a_medialjnimgndimage=fullsize"
    },
    {
      title: "Paradojas",
      date: "29 de Marzo de 2026",
      desc: "La circularidad de los bucles virtuosos contraviene las leyes físicas de la termodinámica y las económicas de los rendimientos decrecientes, porque ningún material se puede reciclar infinitamente sin perder calidad o energía. La economía tendría que renunciar al crecimiento constante porque no hay recursos infinitos en este planeta finito.",
      location: "México",
      tag: "Opinión",
      url: "https://www.jornada.com.mx/2026/03/29/opinion/012o1eco",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/69c/c0f/2e9/69cc0f2e9509b967601294.png"
    },
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
      desc: "La Comisión Europea está redactando la Ley de Economía Circular...",
      location: "Europa",
      tag: "Opinión",
      url: "https://www.expansion.com/opinion/2025/12/15/69401a07468aeb88068b456e.html",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/694/08f/770/69408f770453e314462884.jpg"
    },
    {
      title: "En 2024, el Producto Interno Neto Ecológico fue de 25.7 billones de pesos",
      date: "01 de Diciembre de 2025",
      desc: "El Instituto Nacional de Estadística y Geografía (INEGI) presenta los resultados...",
      location: "México",
      tag: "Noticia",
      url: "https://www.inegi.org.mx/app/saladeprensa/noticia/10432",
      imageUrl: "https://ceiba.org.mx/storage/app/uploads/public/692/dd9/07f/692dd907f3d33223886111.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden group">
        <div 
          className="absolute inset-0 bg-gray-800 transition-transform duration-[2000ms] ease-out group-hover:scale-105 blur-[2px]"
          style={{
            backgroundImage: "url('/informacionrelevante-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Información Relevante
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl max-w-xl mx-auto font-light italic">
            "Entérate de la información más precisa"
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-6xl space-y-16">
        
        {/* CARRUSEL DE RECIENTES */}
        <section className="space-y-6">
          <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
            <div className="space-y-1">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Lo más nuevo</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Publicaciones Recientes</h2>
            </div>

            {/* Controles del Carrusel */}
            <div className="flex items-center gap-2">
              <button 
                onClick={scrollPrev} 
                aria-label="Artículo anterior"
                className="p-2.5 rounded-full border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                ←
              </button>
              <button 
                onClick={scrollNext} 
                aria-label="Siguiente artículo"
                className="p-2.5 rounded-full border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                →
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-3xl" ref={emblaRef}>
            <div className="flex -ml-4">
              {publicacionesRecientes.map((post, index) => (
                <div key={index} className="pl-4 flex-[0_0_100%] min-w-0">
                  <WideFeaturedCard {...post} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de Páginas (Dots) para feedback de UX */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Ir al elemento ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === selectedIndex ? 'w-8 bg-cyan-600' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </section>

        {/* ARCHIVO HISTÓRICO */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center gap-4">
            <h2 className="text-zinc-900 text-xl font-bold tracking-tight shrink-0">Archivo Histórico</h2>
            <div className="h-[1px] w-full bg-zinc-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historico.map((post, index) => (
              <HistoryCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

const WideFeaturedCard = ({ title, date, desc, location, tag, url, imageUrl }: { title: string; date: string; desc: string; location: string; tag: string; url: string; imageUrl: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative flex flex-col justify-end h-[420px] md:h-[480px] w-full rounded-3xl overflow-hidden border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-500"
  >
    {/* Imagen de fondo con Zoom al hacer Hover */}
    <img 
      src={imageUrl} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
    />

    {/* Sombra/Gradiente para garantizar contraste del texto */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

    {/* Etiqueta / Tag Superior */}
    <div className="absolute top-6 left-6 z-10 bg-cyan-600 text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider shadow">
      {tag}
    </div>

    {/* Contenido Texto */}
    <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end space-y-3 text-white">
      <div className="flex items-center gap-2 text-xs text-cyan-300 font-medium">
        <span>{date}</span>
        <span>•</span>
        <span>📍 {location}</span>
      </div>

      <h3 className="text-xl md:text-3xl font-bold leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-zinc-300 text-sm md:text-base leading-relaxed line-clamp-2 font-normal">
        {desc}
      </p>

      <div className="pt-2 flex items-center gap-2 text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
        <span>Leer artículo completo</span>
        <span>→</span>
      </div>
    </div>
  </a>
);

const HistoryCard = ({ title, date, location, url, imageUrl, tag }: { title: string; date: string; location: string; url: string; imageUrl: string; tag: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex gap-4 p-4 bg-white border border-zinc-200/80 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
  >
    <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      {tag && (
        <span className="absolute top-1.5 left-1.5 bg-black/70 text-[9px] text-white px-1.5 py-0.5 rounded uppercase font-bold tracking-wider backdrop-blur-xs">
          {tag}
        </span>
      )}
    </div>

    <div className="flex flex-col justify-between flex-grow min-w-0">
      <div className="space-y-1">
        <span className="text-[11px] font-semibold text-cyan-700 uppercase tracking-wide">
          {date}
        </span>
        <h4 className="font-bold text-zinc-800 group-hover:text-cyan-600 transition-colors text-sm line-clamp-2 leading-snug">
          {title}
        </h4>
      </div>

      <div className="flex items-center justify-between mt-2 pt-1 border-t border-zinc-100 text-xs text-zinc-500">
        <span>📍 {location}</span>
        <span className="text-cyan-600 font-bold group-hover:translate-x-1 transition-transform">
          Leer →
        </span>
      </div>
    </div>
  </a>
);