# STG

STG es una aplicación web desarrollada con React, Vite y TypeScript para la difusión de información institucional, contenido relevante y canales de contacto.

El sistema está desplegado en producción en:
- https://stg-unach.vercel.app

## Descripción

STG está pensado como una plataforma de presentación web orientada a comunicar información clara, estructurada y accesible para usuarios, colaboradores y público en general. El proyecto combina navegación por secciones, contenido institucional y diseño moderno con una interfaz adaptable a distintos dispositivos.

## Principales características

- Navegación por rutas con React Router
- Diseño responsivo y moderno
- Presentación de contenido institucional
- Sección dedicada a información relevante
- Área de contacto
- Arquitectura modular para facilitar mantenimiento y escalabilidad

## Stack tecnológico

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Radix UI
- Lucide React

## Estructura del repositorio

```bash
STG/
├── public/
├── src/
│   ├── pages/
│   │   ├── Acciones.tsx
│   │   ├── Contacto.tsx
│   │   ├── InformacionRelevante.tsx
│   │   └── QuienesSomos.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── tailwind.css
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
├── .gitignore
├── package-lock.json
├── README.md
└── ...
```

## Rutas principales

| Ruta | Vista |
|------|------|
| `/` | Inicio / Quiénes Somos |
| `/quienessomos` | Información institucional |
| `/acciones` | Líneas de acción |
| `/informacion-relevante` | Datos destacados |
| `/contacto` | Contacto |

## Requisitos previos

Para ejecutar el proyecto localmente, necesitas:

- Node.js 18+
- npm

## Instalación

```bash
git clone https://github.com/DVRKHz/STG.git
cd STG
npm install
```

## Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible en:

- http://localhost:5173

## Compilación de producción

```bash
npm run build
```

Este comando genera la versión optimizada para despliegue en la carpeta `dist/`.

## Despliegue

El repositorio incluye la configuración necesaria para desplegar la aplicación en Vercel:

- `vercel.json`

Esto permite una integración sencilla con despliegues automáticos en producción.

## Contribución

Si deseas contribuir al proyecto:

```bash
git checkout -b feature/nueva-funcionalidad
git add .
git commit -m "Agrega nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

Posteriormente, puedes abrir un Pull Request para revisión.

## Licencia

Actualmente el proyecto no declara una licencia específica. Si la intención es compartirlo públicamente o permitir uso externo, se recomienda definir una licencia explícita.

## Enlaces relevantes

- GitHub: https://github.com/DVRKHz/STG
- Producción: https://stg-unach.vercel.app
