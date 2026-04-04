import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const Contacto = () => {
  // Estado para agrupar los valores de los campos de texto del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Estado independiente para almacenar el archivo seleccionado (objeto File)
  const [file, setFile] = useState(null);

  // Estado para gestionar el feedback de la interfaz (carga, éxito o error)
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  /**
   * Maneja los cambios en los inputs de texto.
   * Utiliza el atributo 'name' del input para actualizar la propiedad correspondiente en el objeto formData.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Maneja la selección del archivo.
   * Verifica si hay un archivo seleccionado y lo guarda en el estado 'file'.
   */
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  /**
   * Procesa el envío del formulario.
   * Prepara los datos en un objeto FormData, realiza la petición asíncrona a Formspree
   * y gestiona la respuesta para limpiar el formulario o mostrar errores.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de página por defecto del formulario
    setStatus({ loading: true, success: false, error: null });

    // Se crea una instancia de FormData para permitir el envío de archivos adjuntos
    const dataToSend = new FormData();
    
    // Se recorre el objeto de textos para añadirlos al FormData
    Object.keys(formData).forEach(key => dataToSend.append(key, formData[key]));
    
    // Si existe un archivo, se añade al FormData bajo el nombre "adjunto"
    if (file) dataToSend.append("adjunto", file);

    try {
      // Envío de datos al endpoint de Formspree
      const response = await fetch("https://formspree.io/f/xqeypdbr", {
        method: "POST",
        body: dataToSend,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        // En caso de éxito, resetea estados y notifica al usuario
        setStatus({ loading: false, success: true, error: null});
        setFormData({ nombre: "", email: "", asunto: "", mensaje: ""});
        setFile(null);
        alert("¡Mensaje enviado con éxito!");
      } else {
        // Manejo de errores específicos devueltos por la API
        const data = await response.json();
        throw new Error(data.error || "Error al enviar");
      }
    } catch (error) {
      // Manejo de errores de red o excepciones lanzadas arriba
      setStatus({ loading: false, success: false, error: error.message });
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans">
      <Navbar />
      
      {/* Hero Section: Encabezado visual de la página */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden group">
  
       {/* Imagen de fondo con escala cinematográfica (sin desenfoque) */}
       <div 
         className="absolute inset-0 bg-gray-800 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
         style={{
           backgroundImage: "url('/contacto-hero.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}
         aria-hidden="true"
       />
  
       {/* Overlay dinámico: Gradiente para mejorar legibilidad y profundidad */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true" />

       {/* Contenido con jerarquía y acentos modernos */}
       <div className="relative z-10 container mx-auto px-6 text-center">
    
         {/* Adorno visual: Línea sutil con pulso (puedes cambiar 'blue-500' por tu color de marca) */}
         <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full animate-pulse" />

         <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
           Contacto
         </h1>
    
         <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
           "Estamos aquí para escucharte y colaborar contigo"
         </p>

         {/* Indicador de scroll sutil al hacer hover */}
         <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
         </div>
       </div>
     </section>

      {/* Main Content: Layout principal dividido en Formulario e Información lateral */}
      <main className="container mx-auto px-6 py-12 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Sección del Formulario */}
          <section className="order-2 lg:order-1">
            <h2 className="text-cyan-600 text-sm font-bold tracking-[3px] uppercase mb-8">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField label="Nombre *" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
                <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
              </div>

              {/* Input especializado para la carga de archivos */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Adjuntar Archivo (Opcional)</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 transition-all border border-zinc-200 rounded-md p-1"
                />
              </div>

              <InputField label="Asunto *" name="asunto" value={formData.asunto} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" required />

              {/* Área de texto para el mensaje largo */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              {/* Botón de envío que cambia según el estado de carga */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg active:scale-[0.98] disabled:bg-zinc-400 flex items-center justify-center gap-3"
              >
                {status.loading ? "Enviando..." : "Enviar Mensaje"}
                {!status.loading && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </section>

          {/* Sección lateral con tarjetas de Información de contacto */}
          <section className="order-1 lg:order-2 space-y-10 lg:sticky lg:top-24">
            <h2 className="text-lime-700 text-sm font-bold tracking-[3px] uppercase">
              Información de contacto
            </h2>
            
            <div className="space-y-6">
              <ContactInfoCard 
                icon={<MailIcon />} 
                title="Email" 
                content={
                  <div className="flex flex-col gap-1">
                    <a href="mailto:msilva@unach.com" className="text-cyan-600 hover:underline">msilva@unach.com</a>
                    <a href="mailto:carolina.farrera@unach.com" className="text-cyan-600 hover:underline">carolina.farrera@unach.com</a>
                  </div>
                } 
              />
              <ContactInfoCard 
                icon={<MapIcon />} 
                title="Ubicación" 
                content="Esquina de las Calles Laureles y Orquidea No. 192, Jardines de Tuxtla, 29020. Tuxtla Gutiérrez, Chiapas." 
              />
              <ContactInfoCard 
                icon={<FBIcon />} 
                title="Redes Sociales" 
                content={
                  <a href="https://www.facebook.com/profile.php?id=61587006117007" target="_blank" className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors">
                    <span>Síguenos en Facebook</span>
                  </a>
                } 
              />
            </div>
          </section>
        </div>
      </main>

      <ReportSection />
    </div>
  );
};

// --- COMPONENTES AUXILIARES (UI) ---

/**
 * Componente funcional para reutilizar la estructura de los campos de entrada.
 */
const InputField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-zinc-700">{label}</label>
    <input
      {...props}
      className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
    />
  </div>
);

/**
 * Componente para mostrar bloques de información (Email, Mapa, etc.) con un icono.
 */
const ContactInfoCard = ({ icon, title, content }) => (
  <div className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-cyan-200 transition-all">
    <div className="text-cyan-600">{icon}</div>
    <div>
      <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
      <div className="text-zinc-600 text-sm leading-relaxed">{content}</div>
    </div>
  </div>
);

// --- COMPONENTES DE ICONOS (SVG) ---
const MailIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const MapIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FBIcon = () => <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 14.991 22 12z" /></svg>;