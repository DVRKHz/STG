// data.ts

/**
 * INTERFAZ ProjectItem
 * Define la estructura obligatoria que debe tener cada objeto de datos.
 * Esto ayuda a prevenir errores (como olvidar el link o escribir mal el nombre de una propiedad).
 */
export interface ProjectItem {
  id: number;
  color: string;
  text: string;
  img: string;
  link: string;
}

/**
 * CONSTANTE ACCIONES_DATA
 * Almacena el historial de actividades recientes, reuniones y foros.
 * Se utiliza principalmente para mostrar el compromiso social y vecinal.
 */
export const ACCIONES_DATA: ProjectItem[] = [
   {
      id: 1,
      color: "bg-red-600",
      text: "12-Mar-2026: Reunión con Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/12-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1CGnsrpfiv/"
   },
   {
      id: 2,
      color: "bg-gray-800",
      text: "07-Mar-2026: Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "/07-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 3, 
      color: "bg-cyan-500", 
      text: "19-Feb-2026: Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "/19-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 4, 
      color: "bg-lime-600", 
      text: "06-Feb-2026: Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "/06-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 5, 
      color: "bg-blue-900", 
      text: "28-Nov-2025: Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "/28-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 6, 
      color: "bg-lime-700", 
      text: "14-Nov-2025: Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "/14-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 7,
      color: "bg-purple-600",
      text: "28-Oct-2025: Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "/28-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 8,
      color: "bg-red-600",
      text: "16-Oct-2025: Reunión con funcionarios de ICIPLAM",
      img: "/16-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 9,
      color: "bg-yellow-500",
      text: "02-Oct-2025: En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "/02-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 10,
      color: "bg-green-500",
      text: "25-Ago-2025: Zona Norte de Tuxtla Gutiérrez",
      img: "/25-Ago-25.jpg",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 11,
      color: "bg-blue-500",
      text: "06-Ago-2025: Aula polifuncional de la Facultad de Arquitectura de la UNACH",
      img: "/06-Ago-25.jpg",
      link: "https://www.facebook.com/share/p/1BQAAQbBtH/"
    },
  // Agregar aquí mas acciones...
];

/**
 * CONSTANTE PROYECTOS_DATA
 * Destinada a almacenar iniciativas de largo plazo o proyectos de investigación
 * específicos del CEDES-UNACH.
 */
export const PROYECTOS_DATA: ProjectItem[] = [
  {
    id: 1,
    color: "bg-cyan-500",
    text: "19-Feb-2026: Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez",
    img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/...", // Tu URL original
    link: "https://www.facebook.com/share/p/1865WbmKEW/"
  },
  // Agregar aquí mas proyectos...
];