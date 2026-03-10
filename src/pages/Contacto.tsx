import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const Contacto = () => {
  // --- LÓGICA DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Estado para el archivo adjunto
  const [file, setFile] = useState(null);

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para el archivo
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // IMPORTANTE: Para archivos usamos FormData
    const dataToSend = new FormData();
    dataToSend.append("nombre", formData.nombre);
    dataToSend.append("email", formData.email);
    dataToSend.append("asunto", formData.asunto);
    dataToSend.append("mensaje", formData.mensaje);
    if (file) {
      dataToSend.append("adjunto", file); // Nombre del campo en Formspree
    }

    try {
      const response = await fetch("https://formspree.io/f/xqeypdbr", {
        method: "POST",
        body: dataToSend, // Se envía el FormData directamente
        headers: {
          "Accept": "application/json"
          // NO incluir Content-Type aquí, el navegador lo genera solo
        }
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null});
        setFormData({ nombre: "", email: "", asunto: "", mensaje: ""});
        setFile(null);
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      } else {
        const data = await response.json();
        throw new Error(data.error || "Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
      alert("Error: " + error.message);
    }
  };

  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-700 bg-[url('public/contacto-hero.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col mt-0 max-w-full min-h-[400px] w-full bg-center mb-[0%] mx-[0%] px-[10%] pt-[150px] md:min-h-[600px] md:mx-auto md:my-0 md:pt-[250px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[0%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
              <h1 className="text-white text-[40px] font-semibold box-border caret-transparent leading-[48px] font-plus_jakarta_sans md:text-[72px] md:leading-[86px]">
                Contacto
              </h1>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center z-10">
            <div className="box-border caret-transparent h-full">
              <p className="text-white text-[18px] box-border caret-transparent leading-[28px] font-plus_jakarta_sans md:text-[22px] md:leading-[32px]">
                Estamos aquí para escucharte y colaborar contigo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-[5%] md:px-[0%]">
        <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[30px] w-full mx-auto py-[8%] md:flex-nowrap md:max-w-[min(100%,1140px)] md:py-[6%]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Form MODIFICADO */}
            <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
              <div className="box-border caret-transparent h-full">
                <h2 className="text-cyan-500 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-8 font-plus_jakarta_sans">
                  ENVÍANOS UN MENSAJE
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-black text-[15px] font-medium box-border caret-transparent block mb-3 font-plus_jakarta_sans">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="text-black text-[15px] box-border block w-full leading-[21px] min-h-12 border p-[14px] border-solid border-black/20 font-plus_jakarta_sans focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[15px] font-medium box-border caret-transparent block mb-3 font-plus_jakarta_sans">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-black text-[15px] box-border block w-full leading-[21px] min-h-12 border p-[14px] border-solid border-black/20 font-plus_jakarta_sans focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* NUEVO CAMPO DE ARCHIVO */}
                  <div>
                    <label className="text-black text-[15px] font-medium box-border caret-transparent block mb-3 font-plus_jakarta_sans">
                      Adjuntar Archivo (Opcional)
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="text-black text-[15px] box-border block w-full leading-[21px] border p-[12px] border-solid border-black/20 font-plus_jakarta_sans focus:border-cyan-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[15px] font-medium box-border caret-transparent block mb-3 font-plus_jakarta_sans">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="text-black text-[15px] box-border block w-full leading-[21px] min-h-12 border p-[14px] border-solid border-black/20 font-plus_jakarta_sans focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="¿Sobre qué quieres hablar?"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[15px] font-medium box-border caret-transparent block mb-3 font-plus_jakarta_sans">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="text-black text-[15px] box-border block w-full leading-[24px] border p-[14px] border-solid border-black/20 font-plus_jakarta_sans resize-vertical focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="text-white text-[15px] font-medium bg-cyan-500 box-border caret-transparent inline-block fill-white leading-[15px] text-center capitalize px-[40px] py-[18px] font-plus_jakarta_sans hover:bg-cyan-600 transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400"
                  >
                    <span className="box-border caret-transparent gap-x-[10px] flex fill-white justify-center items-center gap-y-[10px]">
                      <span className="box-border caret-transparent block fill-white normal-case">
                        {status.loading ? "Enviando..." : "Enviar Mensaje"}
                      </span>
                      {!status.loading && (
                        <span className="items-center box-border caret-transparent flex fill-white">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                          </svg>
                        </span>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info (MANTENIDO SIN CAMBIOS) */}
            <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
              <div className="box-border caret-transparent h-full space-y-10">
                <div>
                  <h2 className="text-lime-600 text-[20px] font-semibold box-border caret-transparent tracking-[2px] leading-5 mb-8 font-plus_jakarta_sans">
                    INFORMACIÓN DE CONTACTO
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-cyan-500 text-3xl flex-shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                          Email
                        </h3>
                        <a href="mailto:msilva@unach.com" className="text-cyan-500 text-[16px] box-border caret-transparent font-plus_jakarta_sans hover:text-cyan-600 transition-colors">
                          msilva@unach.com
                        </a>
                        <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mt-6 mb-2 font-plus_jakarta_sans">
                          Email
                        </h3>
                        <a href="mailto:carolina.farrera@unach.com" className="text-cyan-500 text-[16px] box-border caret-transparent font-plus_jakarta_sans hover:text-cyan-600 transition-colors">
                          carolina.farrera@unach.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-lime-600 text-3xl flex-shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-2 font-plus_jakarta_sans">
                          Ubicación
                        </h3>
                        <p className="text-black text-[16px] box-border caret-transparent leading-[26px] font-plus_jakarta_sans">
                          Esquina de las Calles Laureles y Orquidea No. 192 Fraccionamiento, Jardines de Tuxtla, 29020<br />
                          Tuxtla Gutiérrez, Chiapas, México
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-blue-900 text-3xl flex-shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-black text-[18px] font-semibold box-border caret-transparent mb-3 font-plus_jakarta_sans">
                          Redes Sociales
                        </h3>
                        <div className="flex gap-4">
                          <a 
                            href="https://www.facebook.com/profile.php?id=61587006117007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                          >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 14.991 22 12z" />
                            </svg>
                            <span className="text-[16px] font-medium font-plus_jakarta_sans group-hover:underline">
                              Síguenos en Facebook
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ReportSection />
    </body>
  );
};