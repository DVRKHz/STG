// data.ts

/**
 * INTERFAZ ProjectItem
 * Define la estructura obligatoria que debe tener cada objeto de datos.
 * Esto ayuda a prevenir errores (como olvidar el link o escribir mal el nombre de una propiedad).
 */
export interface ProjectItem {
  id: number;
  title: string; // Nombre principal / Titulo de la ponencia
  speaker?: string; // Nombre del ponente / expositor
  location: string; // Dónde ocurrió / Sede
  category: string; // Fecha
  text: string; // Resumen / Descripción
  img: string; // Ruta de la imagen
  link: string; // Enlace a Facebook (Acciones)
  pdfUrl?: string; // Ruta al PDF de la ponencia (CIRES)
  tagColor?: string; // Color del tag
}

/**
 * CONSTANTE ACCIONES_DATA
 * Almacena el historial de actividades recientes, reuniones y foros.
 * Se utiliza principalmente para mostrar el compromiso social y vecinal.
 */
export const ACCIONES_DATA: ProjectItem[] = [
   {
      id: 0,
      title: "Siembra de árboles en la colonia Yukis, Tuxtla Gutiérrez. Microcuenca Potinaspak",
      location: "Col. Yukis, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "16/08/26",
      text: "Con la participación de integrantes del Grupo de Acción Climática Vecinal Yukis, se comenzó con la siembra de arbolitos. Las acciones continuarán y se espera que se sumen más vecinos a esta no le tarea de recuperación y resignificación del territorio.",
      img: "/16-Ago-26.jpg",
      link: "https://www.facebook.com/share/p/1EY5qhLiYS/"
   },
   {
      id: 1,
      title: "Siembra de árboles en la colonia Los Ángeles Centenario, Tuxtla Gutiérrez. Microcuenca Pomarosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "12/08/26",
      text: "En la Colonia Los Angeles Centenario ya comenzó la siembra de arbolitos. Integrantes del Grupo de Acción Climática. Vecinal y otros vecinos se sumaron a la tarea en pro de la conservacion y restauracion territorial.",
      img: "/12-Ago-26.jpg",
      link: "https://www.facebook.com/share/p/1BSLz4Bgdo/"
   },
   {
      id: 2,
      title: "COLOQUIO INTERNACIONAL RESTAURACIÓN ECOLÓGICA Y SUSTENTABILIDAD",
      location: "UNACH & ZOOMAT, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "19/05/26",
      text: "El Coloquio Internacional sobre Restauración Ecológica y Sustentabilidad, organizado por la UNACH y el ZOOMAT, reunió a expertos y académicos para discutir estrategias de conservación y restauración ambiental en la región.",
      img: "19-May-26.jpg",
      link: "https://www.facebook.com/share/p/1FEnj9Bu26/"
   },
   {
      id: 3,
      title: "Reunión con Grupo de Acción Vecinal de la colonia El Yukis para abordar puntos a trabajar en la colonia ubicada en la zona norte de Tuxtla Gutiérrez.",
      location: "Col. yukis, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "26/04/26",
      text: "Mediante un mapeo participativo con vecinos de la colonia Yukis, se trabajarán proyectos de reforestación, reciclaje/composta y captación de agua de lluvia para riego.",
      img: "26-Abr-26 (1).jpg",
      link: "https://www.facebook.com/share/p/1DjQFxzP4K/"
   },
   {
      id: 4,
      title: "Plática informativa con vecinos de la colonia en la zona norte de Tuxtla Gutiérrez ubicada en la parte alta de la microcuenca Pomarrosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "26/04/26",
      text: "Se presentaron a los vecinos los proyectos de captación de agua de lluvia y reforestación en la colonia. Tras su buena aceptación, continuarán las labores de recuperación y mejora territorial.",
      img: "/26-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1EKhcG22De/"
   },
   {
      id: 5,
      title: "Instalación  del Grupo de Acción Climática Vecinal del COBACH 236",
      location: "COBACH 236, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "21/04/26",
      text: "Se llevó a cabo el Foro Vecinal con padres de familia y alumnos del COBACH 236. Después de reflexionar sobre las problemáticas ambiental y del territorio se constituyó el Grupo de Acción Climática Vecinal de ese plantel: integrado por alumnos y padres de familia.",
      img: "/21-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1MFixRMfUj/"
   },
   {
      id: 6,
      title: "Instalación de la Junta de Acción Climática Vecinal, ubicada en la parte alta de la Microcuenca Pomarrosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "15/04/26",
      text: "Se llevó a cabo una reunión con colonos y quedó constituida la Junta de Acción Climática Vecinal la cual llevará a cabo acciones de mejora en dicha colonia como captación de agua de lluvia, siembra de árboles y huertos comunitarios entre otros; con enfoque de infraestructuras verdes.",
      img: "/15-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/18SCsHJGJp/"
   },
   {
      id: 7,
      title: "Recorrido con vecinos de la colonia Yukis ubicada en la Zona Norte de Tuxtla Gutiérrez",
      location: "Col. Yukis, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "11/04/26",
      text: "Se llevó a cabo un recorrido en la colonia Yukis con vecinos de dicha colonia para reconocer el área en el que se pueden realizar intervenciones comunitarias, en especial siembra de árboles.",
      img: "/11-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1CJGsJt59G/"
   },
   {
      id: 8,
      title: "Visita al ZOOMAT en preparación para el Coloquio Internacional “Restauración Ecológica y Sustentabilidad",
      location: "ZOOMAT, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "10/04/26",
      text: "La UNACH y el ZOOMAT coordinan el Coloquio Internacional sobre Restauración Ecológica.",
      img: "/10-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/18P1SWxWjL/"
   },
   {
      id: 9,
      title: "Recorrido Territorial",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "22/03/26",
      text: "Recorrido con el Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/22-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/17RYXFhYC1/"
   },
   {
      id: 10,
      title: "Reunión con Comité Vecinal",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "12/03/26",
      text: "Reunión con Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/12-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1CGnsrpfiv/"
   },
   {
      id: 11,
      title: "Constitución de Junta Vecinal",
      location: "Col. Potinaspak, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "07/03/26",
      text: "Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "/07-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 12, 
      title: "Reunión de Trabajo",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "19/02/26", 
      text: "Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "/19-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 13, 
      title: "Foro Vecinal",
      location: "Esc. Prim. César Cruz Soto",
      tagColor: "bg-blue-500",
      category: "06/02/26", 
      text: "Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "/06-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 14, 
      title: "Foro Vecinal",
      location: "COBACH 236", 
      tagColor: "bg-blue-500",
      category: "28/11/25",
      text: "Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "/28-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 15, 
      title: "Foro Vecinal",
      location: "Telesecundaria 121", 
      tagColor: "bg-blue-500",
      category: "14/11/25",
      text: "Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "/14-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 16,
      title: "Reunión con docentes",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "28/11/25",
      text: "Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "/28-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 17,
      title: "Reunión con funcionarios",
      location: "ICIPLAM",
      tagColor: "bg-blue-500",
      category: "16/10/25",
      text: "Reunión con funcionarios de ICIPLAM",
      img: "/16-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 18,
      title: "Presentación de Proyecto",
      location: "DGIP de la UNACH",
      tagColor: "bg-blue-500",
      category: "02/10/25",
      text: "En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "/02-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 19,
      title: "Recorrido en la Zona Norte",
      location: "Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "25/08/25",
      text: "En agosto se recorrieron escuelas del norte de Tuxtla para evaluar el territorio y programar actividades comunitarias.",
      img: "/25-Ago-25.jpg",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 20,
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
 * CONSTANTE CIRES_DATA
 * Información y eventos referentes al Coloquio Internacional sobre Restauración Ecológica y Sustentabilidad (CIRES 2026).
 */
export const CIRES_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Panel temático de intercambio de saberes sobre la problemática ambiental y su incidencia en el territorio",
    speaker: "Moisés Silva Cervantes, Carolina Farrera Gutiérrez",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Facilitar el intercambio de visiones entre académicos, autoridades y actores locales para consensuar estrategias de conservación territorial basadas en un enfoque ecocéntrico y de corresponsabilidad con la naturaleza.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia1.pdf"
  },
  {
    id: 4,
    title: "Cartografía de combustibles forestales mediante tecnología láser y teledetección en la Península Ibérica",
    speaker: "Francisco Mauro",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Mediante muestreo destructivo, láser y Landsat, el estudio corrige en un 45% la sobreestimación de combustible fino de copa en tres pinos ibéricos. Los modelos predictivos (Random Forest) alcanzaron una precisión ($R^2$) de hasta el 88% en Pinus pinaster.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia4.pdf"
  },
  {
    id: 5,
    title: "Restauración ecológica productiva mediante ganadería regenerativa: una experiencia participativa en el sur de México",
    speaker: "Julio César Gómez Alfaro",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "La ganadería regenerativa en 1,457 ha de Chiapas restauró suelo, biodiversidad y agua mediante pastoreo planificado y silvopastoreo. La intervención incrementó la producción lechera un 24 % promedio, validando la restauración ecológica con fines productivos.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia5.pdf"
  },
  {
    id: 6,
    title: "Compostaje comunitario en Huatecalco, Morelos: Estrategia de mitigación y adaptación ante el cambio climático local ",
    speaker: "Rodolfo Humberto Ramírez León",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Compostaje comunitario en Huatecalco, Morelos, transformó residuos en sustrato orgánico estable en 12 semanas, reduciendo la quema de basura ante el alza térmica.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia6.pdf"
  },
  {
    id: 7,
    title: "Estrategias comunitarias para el uso de recursos hídricos y atención de riesgos en Huitiupán, Chiapas",
    speaker: "César Aramis Martínez Leina",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Mediante investigación-acción participativa, el estudio identificó estrategias comunitarias para la gestión del agua municipal. Concluye que se requiere una Gestión Integrada de Recursos Hídricos para mitigar riesgos y preservar el bienestar territorial.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia7.pdf"
  },
  {
    id: 8,
    title: "Estrategias de resiliencia ambiental en ciudades medias de América Latina",
    speaker: "Yliana Mérida Martínez",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Ciudades medias latinoamericanas evalúan su resiliencia climática con indicadores multidimensionales, pero su gestión sigue desarticulada. El estudio concluye que se debe pasar de una respuesta reactiva a una planificación urbana prospectiva y adaptativa.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia8.pdf"
  },
  {
    id: 9,
    title: "Infraestructuras verdes para la disminución de las islas de calor",
    speaker: "Jorge Rodríguez Hermenegildo",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "La investigación expone el impacto negativo de las islas de calor urbano y propone la infraestructura verde (como techos y áreas verdes) como solución efectiva. Destaca casos globales exitosos que logran mitigar las altas temperaturas y beneficiar a la población.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia9.pdf"
  },
  {
    id: 10,
    title: "Evaluación espacial y por uso de suelo de las concentraciones de plomo en el Río Grande, Chiapas, México",
    speaker: "Erick De Jesús Ralda Molina",
    location: "ZOOMAT, Tuxtla Gtz",
    category: "27/08/26",
    tagColor: "bg-cyan-600",
    text: "Un Modelo Lineal Mixto analizó plomo (Pb) en sedimentos del Río Grande de Comitán, Chiapas, según profundidad y uso de suelo. La profundidad resultó ser el factor determinante en la variación de Pb, demostrando la eficacia del modelo para la inferencia estadística.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia10.pdf"
  }
];

// Alias para mantener compatibilidad si algún componente secundario importa PROYECTOS_DATA
export const PROYECTOS_DATA = CIRES_DATA;