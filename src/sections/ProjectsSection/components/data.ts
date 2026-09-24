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
  code?: string; // Código de la ponencia (si aplica)
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
      category: "16-08-26",
      text: "Con la participación de integrantes del Grupo de Acción Climática Vecinal Yukis, se comenzó con la siembra de arbolitos. Las acciones continuarán y se espera que se sumen más vecinos a esta no le tarea de recuperación y resignificación del territorio.",
      img: "/16-Ago-26.jpg",
      link: "https://www.facebook.com/share/p/1EY5qhLiYS/"
   },
   {
      id: 1,
      title: "Siembra de árboles en la colonia Los Ángeles Centenario, Tuxtla Gutiérrez. Microcuenca Pomarosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "12-08-26",
      text: "En la Colonia Los Angeles Centenario ya comenzó la siembra de arbolitos. Integrantes del Grupo de Acción Climática. Vecinal y otros vecinos se sumaron a la tarea en pro de la conservacion y restauracion territorial.",
      img: "/12-Ago-26.jpg",
      link: "https://www.facebook.com/share/p/1BSLz4Bgdo/"
   },
   {
      id: 2,
      title: "COLOQUIO INTERNACIONAL RESTAURACIÓN ECOLÓGICA Y SUSTENTABILIDAD",
      location: "UNACH & ZOOMAT, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "19-05-26",
      text: "El Coloquio Internacional sobre Restauración Ecológica y Sustentabilidad, organizado por la UNACH y el ZOOMAT, reunió a expertos y académicos para discutir estrategias de conservación y restauración ambiental en la región.",
      img: "19-May-26.jpg",
      link: "https://www.facebook.com/share/p/1FEnj9Bu26/"
   },
   {
      id: 3,
      title: "Reunión con Grupo de Acción Vecinal de la colonia El Yukis para abordar puntos a trabajar en la colonia ubicada en la zona norte de Tuxtla Gutiérrez.",
      location: "Col. yukis, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "26-04-26",
      text: "Mediante un mapeo participativo con vecinos de la colonia Yukis, se trabajarán proyectos de reforestación, reciclaje/composta y captación de agua de lluvia para riego.",
      img: "26-Abr-26 (1).jpg",
      link: "https://www.facebook.com/share/p/1DjQFxzP4K/"
   },
   {
      id: 4,
      title: "Plática informativa con vecinos de la colonia en la zona norte de Tuxtla Gutiérrez ubicada en la parte alta de la microcuenca Pomarrosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "26-04-26",
      text: "Se presentaron a los vecinos los proyectos de captación de agua de lluvia y reforestación en la colonia. Tras su buena aceptación, continuarán las labores de recuperación y mejora territorial.",
      img: "/26-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1EKhcG22De/"
   },
   {
      id: 5,
      title: "Instalación  del Grupo de Acción Climática Vecinal del COBACH 236",
      location: "COBACH 236, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "21-04-26",
      text: "Se llevó a cabo el Foro Vecinal con padres de familia y alumnos del COBACH 236. Después de reflexionar sobre las problemáticas ambiental y del territorio se constituyó el Grupo de Acción Climática Vecinal de ese plantel: integrado por alumnos y padres de familia.",
      img: "/21-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1MFixRMfUj/"
   },
   {
      id: 6,
      title: "Instalación de la Junta de Acción Climática Vecinal, ubicada en la parte alta de la Microcuenca Pomarrosa",
      location: "Col. Los Ángeles Centenario, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "15-04-26",
      text: "Se llevó a cabo una reunión con colonos y quedó constituida la Junta de Acción Climática Vecinal la cual llevará a cabo acciones de mejora en dicha colonia como captación de agua de lluvia, siembra de árboles y huertos comunitarios entre otros; con enfoque de infraestructuras verdes.",
      img: "/15-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/18SCsHJGJp/"
   },
   {
      id: 7,
      title: "Recorrido con vecinos de la colonia Yukis ubicada en la Zona Norte de Tuxtla Gutiérrez",
      location: "Col. Yukis, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "11-04-26",
      text: "Se llevó a cabo un recorrido en la colonia Yukis con vecinos de dicha colonia para reconocer el área en el que se pueden realizar intervenciones comunitarias, en especial siembra de árboles.",
      img: "/11-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/1CJGsJt59G/"
   },
   {
      id: 8,
      title: "Visita al ZOOMAT en preparación para el Coloquio Internacional “Restauración Ecológica y Sustentabilidad",
      location: "ZOOMAT, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "10-04-26",
      text: "La UNACH y el ZOOMAT coordinan el Coloquio Internacional sobre Restauración Ecológica.",
      img: "/10-Abr-26.jpg",
      link: "https://www.facebook.com/share/p/18P1SWxWjL/"
   },
   {
      id: 9,
      title: "Recorrido Territorial",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "22-03-26",
      text: "Recorrido con el Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/22-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/17RYXFhYC1/"
   },
   {
      id: 10,
      title: "Reunión con Comité Vecinal",
      location: "Col. Flor de Mayo, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "12-03-26",
      text: "Reunión con Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "/12-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1CGnsrpfiv/"
   },
   {
      id: 11,
      title: "Constitución de Junta Vecinal",
      location: "Col. Potinaspak, Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "07-03-26",
      text: "Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "/07-Mar-26.jpg",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 12, 
      title: "Reunión de Trabajo",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "19-02-26", 
      text: "Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "/19-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 13, 
      title: "Foro Vecinal",
      location: "Esc. Prim. César Cruz Soto",
      tagColor: "bg-blue-500",
      category: "06-02-26", 
      text: "Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "/06-Feb-26.jpg", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 14, 
      title: "Foro Vecinal",
      location: "COBACH 236", 
      tagColor: "bg-blue-500",
      category: "28-11-25",
      text: "Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "/28-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 15, 
      title: "Foro Vecinal",
      location: "Telesecundaria 121", 
      tagColor: "bg-blue-500",
      category: "14-11-25",
      text: "Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "/14-Nov-25.jpg", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 16,
      title: "Reunión con docentes",
      location: "COBACH 236",
      tagColor: "bg-blue-500",
      category: "28-11-25",
      text: "Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "/28-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 17,
      title: "Reunión con funcionarios",
      location: "ICIPLAM",
      tagColor: "bg-blue-500",
      category: "16-10-25",
      text: "Reunión con funcionarios de ICIPLAM",
      img: "/16-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 18,
      title: "Presentación de Proyecto",
      location: "DGIP de la UNACH",
      tagColor: "bg-blue-500",
      category: "02-10-25",
      text: "En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "/02-Oct-25.jpg",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 19,
      title: "Recorrido en la Zona Norte",
      location: "Tuxtla Gtz",
      tagColor: "bg-blue-500",
      category: "25-08-25",
      text: "En agosto se recorrieron escuelas del norte de Tuxtla para evaluar el territorio y programar actividades comunitarias.",
      img: "/25-Ago-25.jpg",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 20,
      title: "Entrega de Reconocimientos",
      location: "Facultad de Arquitectura, UNACH",
      tagColor: "bg-blue-500",
      category: "06-08-25",
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
    speaker: "Moisés Silva Cervantes",
    code: "CIU-2026-SIMP-0001",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Facilitar el intercambio de visiones entre académicos, autoridades y actores locales para consensuar estrategias de conservación territorial basadas en un enfoque ecocéntrico y de corresponsabilidad con la naturaleza.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia1.pdf"
  },
  {
    id: 4,
    title: "Cartografía de combustibles forestales mediante tecnología láser y teledetección en la Península Ibérica",
    speaker: "Francisco Mauro",
    code:"CIU-2026-SIMP-0013",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante muestreo destructivo, láser y Landsat, el estudio corrige en un 45% la sobreestimación de combustible fino de copa en tres pinos ibéricos. Los modelos predictivos (Random Forest) alcanzaron una precisión ($R^2$) de hasta el 88% en Pinus pinaster.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia4.pdf"
  },
  {
    id: 5,
    title: "Restauración ecológica productiva mediante ganadería regenerativa: una experiencia participativa en el sur de México",
    speaker: "Julio César Gómez Alfaro",
    code: "CIU-2026-SIMP-0014",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La ganadería regenerativa en 1,457 ha de Chiapas restauró suelo, biodiversidad y agua mediante pastoreo planificado y silvopastoreo. La intervención incrementó la producción lechera un 24 % promedio, validando la restauración ecológica con fines productivos.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia5.pdf"
  },
  {
    id: 6,
    title: "Compostaje comunitario en Huatecalco, Morelos: Estrategia de mitigación y adaptación ante el cambio climático local ",
    speaker: "Rodolfo Humberto Ramírez León",
    code: "CIU-2026-SIMP-0015",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Compostaje comunitario en Huatecalco, Morelos, transformó residuos en sustrato orgánico estable en 12 semanas, reduciendo la quema de basura ante el alza térmica.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia6.pdf"
  },
  {
    id: 7,
    title: "Estrategias comunitarias para el uso de recursos hídricos y atención de riesgos en Huitiupán, Chiapas",
    speaker: "César Aramis Martínez Leina",
    code: "CIU-2026-SIMP-0016",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante investigación-acción participativa, el estudio identificó estrategias comunitarias para la gestión del agua municipal. Concluye que se requiere una Gestión Integrada de Recursos Hídricos para mitigar riesgos y preservar el bienestar territorial.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia7.pdf"
  },
  {
    id: 8,
    title: "Estrategias de resiliencia ambiental en ciudades medias de América Latina",
    speaker: "Yliana Mérida Martínez",
    code: "CIU-2026-SIMP-0018",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Ciudades medias latinoamericanas evalúan su resiliencia climática con indicadores multidimensionales, pero su gestión sigue desarticulada. El estudio concluye que se debe pasar de una respuesta reactiva a una planificación urbana prospectiva y adaptativa.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia8.pdf"
  },
  {
    id: 9,
    title: "Infraestructuras verdes para la disminución de las islas de calor",
    speaker: "Jorge Rodríguez Hermenegildo",
    code: "CIU-2026-SIMP-0019",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La investigación expone el impacto negativo de las islas de calor urbano y propone la infraestructura verde (como techos y áreas verdes) como solución efectiva. Destaca casos globales exitosos que logran mitigar las altas temperaturas y beneficiar a la población.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia9.pdf"
  },
  {
    id: 10,
    title: "Evaluación espacial y por uso de suelo de las concentraciones de plomo en el Río Grande, Chiapas, México",
    speaker: "Erick De Jesús Ralda Molina",
    code: "CIU-2026-SIMP-0020",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Un Modelo Lineal Mixto analizó plomo (Pb) en sedimentos del Río Grande de Comitán, Chiapas, según profundidad y uso de suelo. La profundidad resultó ser el factor determinante en la variación de Pb, demostrando la eficacia del modelo para la inferencia estadística.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia10.pdf"
  },
  {
    id: 11,
    title: "Aproximación a los sistemas socioecológicos de la Unión de Comunidades Indígenas El Cerro de la Cachimba, Chiapas, con perspectiva de cuencas hidrográficas y coberturas terrestres",
    speaker: "Mexitzin Leopoldo Medina Sanson",
    code: "CIU-2026-SIMP-0021",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Hallazgos preliminares caracterizan el ambiente natural de la UCICC mediante un enfoque socioecológico en dos microcuencas. Pese a diferencias físicas, ambas forman una unidad territorial con alto potencial en servicios ecosistémicos (agua, biodiversidad y ecoturismo), respaldados por su sólida organización social.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia11.pdf"
  },
  {
    id: 12,
    title: "Valoración de materiales para viviendas sostenibles de familias de bajos ingresos de Tiltepec, Jiquipilas, Chiapas",
    speaker: "Lorenzo Franco Escamirosa Montalvo",
    code: "CIU-2026-SIMP-0022",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio analizó 17 viviendas de bajos ingresos y materiales locales en Tiltepec, Jiquipilas, Chiapas. Las pruebas de laboratorio confirmaron la idoneidad constructiva de la arcilla, arena y tabique local, sentando las bases para proponer viviendas alternativas, sostenibles y con servicios adecuados.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia12.pdf"
  },
  {
    id: 13,
    title: "Restauración, conservación y aprovechamiento del manglar en Paraíso, Tabasco: modelo de aprovechamiento integral",
    speaker: "Gloria Isela Hernández Melchor",
    code: "CIU-2026-SIMP-0023",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio en Paraíso, Tabasco, demuestra que la gobernanza local y el manejo autorizado mediante UMA permiten el aprovechamiento integral y sostenible del manglar. El modelo diversifica ingresos comunitarios y fortalece la conservación, conciliando el desarrollo rural con la protección del ecosistema.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia13.pdf"
  },
  {
    id: 14,
    title: "Identificación de ollas de captación pluvial en geoformas volcánicas de la CDMX mediante Análisis Multicriterio",
    speaker: "Lluvia Fernanda Maldonado Sáenz",
    code: "CIU-2026-SIMP-0025",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante un Análisis Multicriterio en SIG, la investigación identificó geoformas volcánicas idóneas en la CDMX para instalar ollas de captación pluvial a macro-escala. El modelo aprovecha el relieve para recargar el acuífero por infiltración y distribuir agua por gravedad a zonas vulnerables, reduciendo la dependencia externa.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia14.pdf"
  },
  {
    id: 15,
    title: "Sustentabilidad ecológica y Derechos Humanos frente a la extracción minera en la montaña Sapadril de Puerto Cortés, Honduras",
    speaker: "José Noel Ortiz Pineda",
    code: "CIU-2026-SIMP-0026",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El trabajo visibiliza la vulneración de derechos humanos por proyectos mineros extractivos transnacionales en Honduras. Analiza mecanismos jurídicos e internacionales para buscar justicia comunitaria y frenar el impacto socioambiental de un modelo económico extractivista.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia15.pdf"
  },
  {
    id: 16,
    title: "La deriva como metodología de inserción comunitaria en la restauración socioecológica del territorio",
    speaker: "Raymundo Silva Herrera",
    code: "CIU-2026-SIMP-0027",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La deriva etnográfica en una comunidad periurbana de Chiapas facilitó la inserción comunitaria, el reconocimiento de saberes y la confianza local. Se concluye que la investigación etnográfica es indispensable para diseñar estrategias de restauración socioecológica pertinentes, apropiadas y sostenibles.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia16.pdf"
  },
  {
    id: 17,
    title: "Diagnóstico participativo y percepciones comunitarias en la microcuenca Totoposte",
    speaker: "Elisa Cruz Rueda",
    code: "CIU-2026-SIMP-0028",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante mapeo analógico y de empatías con la comunidad de la colonia Las Granjas (Tuxtla Gutiérrez), el Foro Vecinal diagnosticó las condiciones socioambientales de la microcuenca Totoposte. El estudio recuperó percepciones y propuestas locales para la recuperación y resignificación territorial con enfoque ecocéntrico.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia17.pdf"
  },
  {
    id: 18,
    title: "Reintegración sustentable de ríos urbanos, a través del análisis urbano-regional subcuenca Tuxtla Gutiérrez, Chiapas",
    speaker: "Verónica Nazar Coutiño",
    code: "CIU-2026-SIMP-0030",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La investigación del Doctorado en Urbanismo (UNAM) propone un método mixto multietapas (diagnóstico con índice URBS, imagen objetivo y planeación participativa) para reintegrar ríos y arroyos urbanos al desarrollo de Tuxtla Gutiérrez. Surge de un estudio previo de maestría que identificó oportunidades clave para la gestión y recuperabilidad de esta subcuenca.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia18.pdf"
  },
  {
    id: 19,
    title: "Percepción social del riesgo climático en ciudades latinoamericanas: estado del arte y marco teórico",
    speaker: "Alexa Fernanda Vallejo Quintana",
    code: "CIU-2026-SIMP-0031",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La revisión cualitativa de 59 fuentes (1987-2025) sistematizó la percepción del riesgo climático, revelando que la experiencia y los factores afectivos pesan más que el conocimiento. El trabajo propone un marco teórico de cuatro dimensiones para ciudades latinoamericanas, atendiendo la falta de estudios propios en la Zona Metropolitana del Valle de México.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia19.pdf"
  },
  {
    id: 20,
    title: "Conocimiento ecológico tradicional y manejo del fuego en el Cerro Mactumatzá",
    speaker: "Edgar Guadalupe Sánchez Díaz",
    code: "CIU-2026-SIMP-0032",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante enfoque mixto e Investigación Acción Participativa en el Cerro Mactumatzá, el estudio analiza el conocimiento ecológico tradicional frente a los incendios forestales. Demuestra que las comunidades conservan saberes clave sobre el comportamiento del fuego y quemas preventivas, esenciales para fortalecer estrategias locales de manejo.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia20.pdf"
  },
  {
    id: 21,
    title: "Ictiodiversidad alfa, beta y gamma de una laguna costera tropical de Chiapas, México",
    speaker: "Vicente Castro-Castro",
    code: "CIU-2026-SIMP-0035",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio analizó durante un año la diversidad de peces y parámetros ambientales en la Laguna Pampa El Cabildo, registrando 23 especies y evaluando su diversidad alfa, beta y gamma. La línea base obtenida destaca un 43% de peces marino-eurihalinos, evidenciando un alto potencial para la acuicultura en México.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia21.pdf"
  },
  {
    id: 22,
    title: "Prácticas y liderazgo de las mujeres en el manejo del agua en la subcuenca del río Sabinal, Chiapas",
    speaker: "Bianca Berenice Rodríguez Pérez",
    code: "CIU-2026-SIMP-0033",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "En la subcuenca del río Sabinal (Tuxtla Gutiérrez), el crecimiento urbano acelerado y la contaminación han elevado la vulnerabilidad socioambiental. Frente a esto, los conocimientos y la organización comunitaria de las mujeres son clave para la resiliencia hídrica, aunque siguen siendo invisibilizados en los espacios institucionales de decisión.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia22.pdf"
  },
  {
    id: 23,
    title: "Fortalecimiento de la cadena de valor del cacao mediante un enfoque agroecológico y de gobernanza comunitaria: experiencia de la Cooperativa NUCORI, Chiapas",
    speaker: "Ximena Espejel Ontiveros",
    code: "CIU-2026-SIMP-0036",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "FONCET, NUCORI y Fundación Estafeta fortalecieron la cadena de valor del cacao agroecológico en Mapastepec, Chiapas, abarcando 60 ha y 10,000 plantas. El proyecto duplicó los ingresos de los productores al eliminar intermediarios, consolidó la poscosecha y posicionó el cacao comunitario en la red internacional Terra Madre 2026.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia23.pdf"
  },
  {
    id: 24,
    title: "Saneamiento del río Sabinal: diagnóstico, estrategia y resultados",
    speaker: "José de Jesús Morales Gómez",
    code: "CIU-2026-SIMP-0037",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Tras analizar el saneamiento del río Sabinal (2023-2025), el estudio evidenció mejoras ambientales clave como la reducción de contaminantes y un oxígeno disuelto favorable para la vida acuática (>6 mg/L). Concluye que, aunque la recuperación es sustancial, persisten coliformes y nitrógeno, exigiendo monitoreo y mantenimiento permanente.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia24.pdf"
  },
  {
    id: 25,
    title: "La región del riesgo: construcción social del riesgo y pensamiento ecocéntrico como oportunidad para territorios climáticamente adaptados en microcuencas de Tuxtla Gutiérrez",
    speaker: "Joseliny Omar Díaz Torres",
    code: "CIU-2026-SIMP-0038",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante metodología cualitativa y participativa, el trabajo analiza el pensamiento ecocéntrico frente a las inundaciones en microcuencas de Tuxtla Gutiérrez. Concluye que las prácticas comunitarias y la organización vecinal ofrecen una alternativa al modelo de infraestructura gris, impulsando la adaptación climática y la restauración ecológica desde abajo.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia25.pdf"
  },
  {
    id: 26,
    title: "Modelo integrado de investigación socioambiental (MIIS)",
    speaker: "María Teresa de Jesús Trujillo Olivera",
    code: "CIU-2026-SIMP-0039",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El trabajo presenta el Modelo Integrado de Investigación Socioambiental (MIIS), una propuesta de métodos mixtos que articula dimensiones ecológicas, sociales e institucionales para el estudio de residuos urbanos en mercados públicos. Su aporte clave es ofrecer una ruta metodológica replicable para analizar sistemas socioecológicos complejos y orientar la gobernanza ambiental.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia26.pdf"
  },
  {
    id: 27,
    title: "Restauración activa como catalizador de la sucesión ecológica en un paisaje de bosque mesófilo de montaña: experiencia en la APRN La Frailescana, Chiapas",
    speaker: "Sheila Diaz Salinas",
    code: "CIU-2026-SIMP-0040",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio evaluó la restauración activa de 14 ha con Pinus oocarpa y obras de conservación de suelo en La Frailescana, Chiapas. A 2.5 años, los resultados mostraron un 70 % de supervivencia, regeneración natural temprana y un aumento visible en la cobertura arbórea, confirmando la efectividad de estas intervenciones en el bosque mesófilo de montaña.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia27.pdf"
  },
  {
    id: 28,
    title: "Restauración de paisajes hídricos: Diagnóstico y acción local en la Sierra Sur de Oaxaca, México",
    speaker: "Julio César García Macías",
    code: "CIU-2026-SIMP-0041",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La iniciativa de Conservación Internacional México en la Sierra Sur de Oaxaca restauró la funcionalidad hidrológica en cuatro manantiales mediante Soluciones Basadas en la Naturaleza y cartografía comunitaria. Concluye que articular infraestructura verde, gobernanza local y monitoreo técnico recupera con éxito la seguridad hídrica rural.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia28.pdf"
  },
  {
    id: 29,
    title: "Restauración forestal, establecimiento y mantenimiento de sistemas agroforestales en comunidades de la Sierra Madre de Chiapas",
    speaker: "Luis Fernando López Miranda",
    code: "CIU-2026-SIMP-0042",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "AMBIO y Conservación Internacional impulsaron la restauración de 800.8 ha en la Sierra Madre de Chiapas mediante Regeneración Natural Asistida (RNA) y Sistemas Agroforestales (SAFs). La totalidad de la superficie se integró al programa Scolel’te, incentivando la conservación comunitariamente mediante la venta de créditos de carbono.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia29.pdf"
  },
  {
    id: 30,
    title: "Restauración de Paisajes Emblemáticos en la RB La Sepultura, Chiapas; Usando la Regeneración Natural Asistida",
    speaker: "Ismael Cruz Hernandez",
    code: "CIU-2026-SIMP-0043",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio en la Reserva de la Biosfera La Sepultura muestra que la Regeneración Natural Asistida (RNA) recuperó 50 ha de bosque de coníferas en Cintalapa, Chiapas, identificando 27,500 renuevos. Concluye que la RNA es una estrategia rentable, replicable y participativa para acelerar la regeneración ecológica y asegurar servicios ambientales.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia30.pdf"
  },
  {
    id: 31,
    title: "EcoRegión San Cristóbal de Las Casas",
    speaker: "Luis Arturo Ordaz Ruiz",
    code: "CIU-2026-SIMP-0046",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "El estudio propone el dispositivo MicroRegión Sociocultural Cotidiana-EcoRegión Cotidiana (MRSC-ERC) para rebasar la planeación convencional en San Cristóbal de Las Casas, Chiapas. Mediante metodologías participativas y un enfoque relacional, el Marco General de Desarrollo 2030 articula el diagnóstico colectivo con agendas estratégicas orientadas al bienestar territorial y la gobernanza compartida.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia31.pdf"
  },
  {
    id: 32,
    title: "Impacto del nitrógeno y su relación con la contaminación del agua superficial",
    speaker: "Patricia del Carmen Paredes Suárez",
    code: "CIU-2026-SIMP-0047",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "La revisión evidencia que las actividades agropecuarias y la acuicultura aportan entre el 50 y el 70 % de nitrógeno y fósforo en las aguas del trópico húmedo del norte de Chiapas, provocando eutrofización. Destaca la escasez de datos regionales y las limitaciones del ICA actual, urgiendo planes de conservación y estrategias comunitarias contextualizadas.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia32.pdf"
  },
  {
    id: 33,
    title: "Agua para la vida: Los usos bioculturales del agua",
    speaker: "Moisés Emmanuel Trujillo Zozaya",
    code: "CIU-2026-SIMP-0048",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante Investigación Acción Participativa y métodos cualitativos, la ponencia analiza los usos bioculturales del agua (domésticos, agrícolas, rituales y de saberes ancestrales) para visibilizar su rol en la identidad comunitaria. Concluye que integrar naturaleza y cultura es indispensable para diseñar políticas de sostenibilidad y justicia hídrica.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia33.pdf"
  },
  {
    id: 34,
    title: "Fortalecimiento de los Socioecosistemas Urbanos Mediante Infraestructura Verde para la Adaptación Climática en las Microcuencas Urbanas de Tuxtla Gutiérrez, Chiapas",
    speaker: "José Antonio Villanueva Santiago",
    code: "CIU-2026-SIMP-0049",
    location: "ZOOMAT, Tuxtla Gtz",
    tagColor: "bg-cyan-600",
    category: "27/08/2026",
    text: "Mediante un diagnóstico técnico-participativo, la investigación diseñó una propuesta de infraestructura verde con Soluciones Basadas en la Naturaleza para microcuencas urbanas de Tuxtla Gutiérrez en la subcuenca del Río Sabinal. Concluye que la integración de obras de reinfiltración, corredores verdes y vegetación nativa reduce la vulnerabilidad a inundaciones y fortalece la resiliencia urbana frente al cambio climático.",
    img: "/19-May-26.jpg",
    link: "#",
    pdfUrl: "/ponencia34.pdf"
  }
];

// Alias para mantener compatibilidad si algún componente secundario importa PROYECTOS_DATA
export const PROYECTOS_DATA = CIRES_DATA;