// data.ts

/**
 * INTERFAZ ProjectItem
 * Define la estructura obligatoria que debe tener cada objeto de datos.
 * Esto ayuda a prevenir errores (como olvidar el link o escribir mal el nombre de una propiedad).
 */
export interface ProjectItem {
  id: number;
  title: string; // Nombre principal
  location: string; // Dónde ocurrió
  category: string; // Fecha
  text: string; // Descripción detallada
  img: string; // Ruta de la imagen
  link: string; // Enlace a Facebook
  tagColor?: string; // Color del tag
}

/**
 * CONSTANTE ACCIONES_DATA
 * Almacena el historial de actividades recientes, reuniones y foros.
 * Se utiliza principalmente para mostrar el compromiso social y vecinal.
 */
export const ACCIONES_DATA: ProjectItem[] = [
   {
    id: 1,
    title: "Recorrido con vecinos de la colonia Yukis ubicada en la Zona Norte de Tuxtla Gutiérrez",
    location: "Col. Yukis, Tuxtla Gtz",
    tagColor: "bg-blue-500",
    category: "11/04/26",
    text: "Se llevó a cabo un recorrido en la colonia Yukis con vecinos de dicha colonia para reconocer el área en el que se pueden realizar intervenciones comunitarias, en especial siembra de árboles.",
    img: "/11-Abr-26.jpg",
    link: "https://www.facebook.com/share/p/1CJGsJt59G/"
   },
   {
      id: 2,
      title: "Visita al ZOOMAT en preparación para el Coloquio Internacional “Restauración Ecológica y Sustentabilidad",
      location: "ZOOMAT, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "10/04/26",
      text: "Integrantes de la UNACH visitaron el ZOOMAT para coordinar el Coloquio Internacional “Restauración Ecológica y Sustentabilidad",
      img: "/10-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/18P1SWxWjL/"
   },
   {
      id: 3,
      title: "Recorrido Territorial",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "22/03/26",
      text: "Recorrido con el Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/22-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/17RYXFhYC1/"
   },
   {
      id: 4,
      title: "Reunión con Comité Vecinal",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "12/03/26",
      text: "Reunión con Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/12-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1CGnsrpfiv/"
   },
   {
      id: 5,
      title: "Constitución de Junta Vecinal",
      location: "Col. Potinaspak, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "07/03/26",
      text: "Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "/07-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 6, 
      title: "Reunión de Trabajo",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "19/02/26", 
      text: "Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "/19-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 7, 
      title: "Foro Vecinal",
      location: "Esc. Prim. César Cruz Soto",
      tagColor: "bg-blue-500",
      category: "06/02/26", 
      text: "Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "/06-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 8, 
      title: "Foro Vecinal",
      location: "COBACH 236", 
      tagColor: "bg-blue-500",
      category: "28/11/25",
      text: "Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "/28-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 9, 
      title: "Foro Vecinal",
      location: "Telesecundaria 121", 
      tagColor: "bg-blue-500",
      category: "14/11/25",
      text: "Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "/14-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 10,
      title: "Reunión con docentes",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "28/11/25",
      text: "Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "/28-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 11,
      title: "Reunión con funcionarios",
      location: "ICIPLAM",
      tagColor: "bg-blue-500",
      category: "16/10/25",
      text: "Reunión con funcionarios de ICIPLAM",
      img: "/16-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 12,
      title: "Presentación de Proyecto",
      location: "DGIP de la UNACH",
      tagColor: "bg-blue-500",
      category: "02/10/25",
      text: "En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "/02-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 13,
      title: "Recorrido en la Zona Norte",
      location: "Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "25/08/25",
      text: "En el mes de agosto se hizo un recorrido de escuelas de la zona norte de Tuxtla Gutiérrez con el fin de observar las condiciones del territorio..",
      img: "/25-Ago-25.jpg",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 14,
      title: "Entrega de Reconocimientos",
      location: "Facultad de Arquitectura, UNACH",
      tagColor: "bg-blue-500",
      category: "06/08/25",
      text: "Aula polifuncional de la Facultad de Arquitectura de la UNACH",
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
    title: "Recuperación de Microcuencas",
    location: "Tuxtla Gutiérrez, Chiapas",
    category: "2025 - Actual",
    tagColor: "bg-blue-500",
    text: "Propuestas e iniciativas para impulsar desde el enfoque 'eco-céntrico', la recuperación y resignificación territorial en microcuencas inundables...",
    img: "/proyecto-microcuencas.jpg",
    link: "https://www.facebook.com/share/p/1GDZNQ7xGm/"
  },
  // Agregar aquí mas proyectos...
];