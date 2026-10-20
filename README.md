# STG

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel) ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

STG is a modern web application built with React, Vite, and TypeScript to present institutional information, relevant content, and contact channels in a structured and accessible format.

Live demo:
- https://stg-unach.vercel.app

## Overview

STG is designed as a digital information platform for communicating institutional content in a clear and professional way. The project combines responsive layout, structured navigation, and modular frontend organization to deliver a maintainable solution for public-facing information.

## Key features

- Route-based navigation with React Router
- Responsive and modern interface
- Institutional content presentation
- Relevant information section
- Contact area
- Modular architecture for easier maintenance and scalability

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Radix UI
- Lucide React

## Repository structure

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
├── LICENSE
├── README.md
├── llms.txt
├── docs/
│   └── overview.md
└── ...
```

## Main routes

- `/` — Home / Quiénes Somos
- `/quienessomos` — Institutional information
- `/acciones` — Action lines
- `/informacion-relevante` — Relevant information
- `/contacto` — Contact page

## Prerequisites

Before running the project, ensure you have:

- Node.js 18+
- npm

## Installation

```bash
git clone https://github.com/DVRKHz/STG.git
cd STG
npm install
```

## Local development

```bash
npm run dev
```

The application will be available at:
- http://localhost:5173

## Production build

```bash
npm run build
```

This generates the optimized build in the `dist/` directory.

## Deployment

The repository includes Vercel deployment support:

- `vercel.json`

## Documentation

- `README.md`
- `docs/overview.md`
- `llms.txt`

## Contributing

Contributions are welcome. To contribute:

```bash
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

Then open a Pull Request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Relevant links

- GitHub: https://github.com/DVRKHz/STG
- Production: https://stg-unach.vercel.app
