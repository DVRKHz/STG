import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const QuienesSomos = () => {
  return (
    // Contenedor principal: Define el estilo base, la fuente y el color de selección de texto
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* SECCIÓN HERO: Encabezado con efecto de zoom sutil en la imagen de fondo */}
      <section className="relative h-[50vh] md:h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Capa de imagen: hover:scale-105 crea el efecto de acercamiento al pasar el mouse */}
        <div 
          className="absolute inset-0 bg-gray-800 bg-[url('/quienessomos-hero.jpg')] bg-cover bg-center transition-transform duration-700 hover:scale-105"
          aria-hidden="true"
        />
        {/* Overlay oscuro para garantizar legibilidad del título blanco */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Título principal con animación de entrada (fade-in-up) */}
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            Quiénes Somos
          </h1>
        </div>
      </section>

      {/* ÁREA DE CONTENIDO: Contenedor centrado con grandes espacios entre secciones (space-y-20) */}
      <main className="container mx-auto px-6 py-12 md:py-24 max-w-5xl space-y-20 md:space-y-32">
        
        {/* Grid de Misión y Visión: Se divide en 2 columnas en pantallas medianas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <article className="space-y-4">
            <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Promover la sostenibilidad y resiliencia en el Sureste de México...
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-lime-600 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Visión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Ser una organización líder reconocida por su capacidad de articular esfuerzos...
            </p>
          </article>
        </div>

        {/* SECCIÓN VALORES: Listado con iconos circulares estilizados */}
        <section className="space-y-12">
          <h2 className="text-blue-900 text-sm md:text-base font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {/* Uso del sub-componente ValueItem para evitar repetir código */}
            <ValueItem color="text-cyan-500" title="Colaboración" desc="Trabajamos en alianza con diversos actores..." />
            <ValueItem color="text-lime-600" title="Sostenibilidad" desc="Promovemos prácticas que aseguren el equilibrio..." />
            <ValueItem color="text-pink-600" title="Transparencia" desc="Operamos con honestidad y rendición de cuentas..." />
            <ValueItem color="text-blue-900" title="Innovación" desc="Buscamos soluciones creativas y efectivas..." />
          </div>
        </section>

        {/* SECCIÓN EQUIPO: Galería de fotos con nombres y cargos */}
        <section id="equipo" className="space-y-12 pb-10">
          <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Uso del sub-componente TeamMember para mantener la consistencia visual */}
            <TeamMember name="Nombre" role="Director/a" img="..." />
            <TeamMember name="Nombre" role="Coordinador/a" img="..." />
            <TeamMember name="Nombre" role="Especialista" img="..." />
          </div>
        </section>
      </main>

      <ReportSection />
    </div>
  );
};

// --- SUB-COMPONENTES AUXILIARES ---

/**
 * ValueItem: Renderiza un valor de la empresa con un punto de color y descripción.
 * Incluye un efecto de escala en el icono al hacer hover sobre el contenedor.
 */
const ValueItem = ({ color, title, desc }) => (
  <div className="flex gap-4 items-start group">
    <span className={`${color} text-2xl transition-transform group-hover:scale-125`}>●</span>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

/**
 * TeamMember: Renderiza la ficha de un integrante del equipo.
 * Aspect-ratio [4/5] mantiene las fotos uniformes sin importar el tamaño original.
 */
const TeamMember = ({ name, role, img }) => (
  <div className="group space-y-4">
    <div className="overflow-hidden rounded-lg bg-gray-100">
      <img
        src={img}
        alt={name}
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-zinc-500">{role}</p>
    </div>
  </div>
);