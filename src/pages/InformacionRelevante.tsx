import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const InformacionRelevante = () => {
  // 1. DATA: Aquí es donde  se añadirán las nuevas publicaciones.
  // Si se deja el arreglo vacío [], aparecerá el mensaje de "No hay publicaciones".
  const publicacionesRecientes = [
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
        
        {/* SECCIÓN: PUBLICACIONES RECIENTES (DINÁMICA) */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-cyan-600 text-sm md:text-base font-bold tracking-[3px] uppercase shrink-0">
              Publicaciones Recientes
            </h2>
            <div className="h-[1px] w-full bg-cyan-100"></div>
          </div>

          {publicacionesRecientes.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {publicacionesRecientes.map((post, index) => (
                <PostCard 
                  key={index}
                  {...post}
                  borderColor="border-cyan-500"
                  isFeatured={true} // Prop opcional para darle un toque extra
                />
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="bg-zinc-50 border-l-4 border-cyan-500 p-6 md:p-10 rounded-r-lg">
              <p className="text-lg md:text-xl text-zinc-600 italic leading-relaxed">
                "Actualmente no hay publicaciones nuevas. Por favor, revisa esta página regularmente."
              </p>
            </div>
          )}
        </section>

        {/* SECCIÓN: PUBLICACIONES ANTERIORES */}
        <section className="space-y-10">
          <div className="flex items-center gap-4">
            <h2 className="text-lime-700 text-sm md:text-base font-bold tracking-[3px] uppercase shrink-0">
              Histórico
            </h2>
            <div className="h-[1px] w-full bg-lime-100"></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <PostCard 
              borderColor="border-zinc-300"
              title="Por qué la economía circular depende de todos nosotros"
              date="15 de Diciembre de 2025"
              desc="La Comisión Europea está redactando en estos momentos la Ley de Economía Circular, que prevé aprobar antes de que finalice 2026."
              location="Europa"
              tag="Opinión"
              url="https://www.expansion.com/opinion/2025/12/15/69401a07468aeb88068b456e.html"
              imageUrl="https://e01-phantom-expansion.uecdn.es/d7365aac371fa92cc9bed4060de69cae/crop/0x0/2048x1365/resize/828/f/webp/assets/multimedia/imagenes/2022/10/17/16659599710526.jpg"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <PostCard
              borderColor="border-zinc-300"
              title="En 2024, el Producto Interno Neto Ecológico fué de 25.7 billones de pesos: representó 76.6% del PIB a precios de mercado"
              date="01 de Diciembre de 2025"
              desc="El Instituto Nacional de Estadística y Geografía (INEGI) presenta los resultados de las Cuentas Económicas y Ecológicas de México (CEEM) 2024."
              location="México"
              tag="Noticia"
              url="https://www.inegi.org.mx/app/saladeprensa/noticia/10432"
              imageUrl="https://ceiba.org.mx/storage/app/uploads/public/692/dd9/07f/thumb_41_540_0_0_0_auto.png"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <PostCard
              borderColor="border-zinc-300"
              title="Urge Bárcena a transitar a economía del reciclaje"
              date="27 de Noviembre de 2025"
              desc='México genera 120 mil toneladas diarias de desperdicios;"no podemos seguir así, debemos lograr que esa basura se convierta en un recurso", planteó Alicia Bárcena Ibarra.'
              location="México"
              tag="Noticia"
              url="https://www.jornada.com.mx/noticia/2025/11/27/politica/urge-barcena-a-transitar-a-economia-del-reciclaje"
              imageUrl="https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/urge-barcena-a-transitar-a-economia-del-reciclaje/urge-barcena-a-transitar-a-economia-del-reciclaje_768c6c00-6e1b-42bd-8422-89abbc9fa30a_medialjnimgndimage=fullsize"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <PostCard
              borderColor="border-zinc-300"
              title="México acelera la economía circular: inversión verde supera los 400,00 mdp"
              date="20 de Noviembre de 2025"
              desc="La economía circular comienza a ocupar un espacio más relevante en la agenda económica del país, en un contexto donde México recicla o reutiliza apenas 0.4% de los materiales que emplea, muy por debajo del promedio global de 7.2%, según datos de la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT). En este escenario, la economía, los materiales y el reciclaje adquieren un peso estratégico."
              location="México"
              tag="Noticia"
              url="https://mexicoindustry.com/noticia/mexico-acelera-la-economia-circular-inversion-verde-supera-los-400-000-mdp"
              imageUrl="https://mexicoindustry.com/admin/images/notas/2025/11/mexico-acelera-la-economia-circular-inversion-verde-supera-los-400-000-mdp-32367.jpg"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <PostCard
              borderColor="border-zinc-300"
              title="Gobierno desvió recursos para mitigar cambio climático hacia megaproyectos y Sedena: CEMDA"
              date="19 de Noviembre de 2025"
              desc="El Director Ejecutivo del Centro Mexicano de Derecho Ambiental enumeró una serie de decisiones gubernamentales que contravienen la lucha contra el calentamiento global"
              location="México"
              tag="Entrevista"
              url="https://aristeguinoticias.com/1911/entrevistas-completas/gobierno-desvio-recursos-para-mitigar-cambio-climatico-hacia-megaproyectos-y-sedena-cemda/"
              imageUrl="https://editorial.aristeguinoticias.com/wp-content/uploads/2025/11/gobierno-desvio-recursos-cambio-climatico-para-el-tren-maya-sedena.jpg"
            />
          </div>
        </section>
      </main>

      <ReportSection />
    </div>
  );
};

/**
 * COMPONENTE PostCard (Mejorado)
 */
const PostCard = ({ borderColor, title, date, desc, location, tag, url, imageUrl, isFeatured }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex flex-col md:grid ${isFeatured ? 'md:grid-cols-[1.2fr,2fr]' : 'md:grid-cols-[1fr,2.2fr]'} 
    overflow-hidden border-l-4 ${borderColor} bg-white shadow-sm border-y border-r border-zinc-100 rounded-r-xl 
    hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer`}
  >
    <div className="relative w-full h-56 md:h-full overflow-hidden bg-zinc-200">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      {isFeatured && (
        <div className="absolute top-4 left-4 bg-cyan-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          Nuevo
        </div>
      )}
    </div>

    <div className="flex flex-col p-6 md:p-8 justify-between gap-4">
      <div className="space-y-3">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-[2px]">{date}</span>
        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-zinc-900 group-hover:text-cyan-600 transition-colors leading-tight`}>
          {title}
        </h3>
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base line-clamp-3">
          {desc}
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-50">
        <div className="flex gap-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-lg">
            📍 {location}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 bg-cyan-50 px-3 py-1.5 rounded-lg">
            🏷️ {tag}
          </span>
        </div>
        <span className="text-cyan-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">
          Ver más <span className="text-lg">→</span>
        </span>
      </div>
    </div>
  </a>
);