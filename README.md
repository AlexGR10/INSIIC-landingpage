# 🚀 Landing INSIIC
Corporate landing page for INSIIC, focused on showcasing industrial projects and maintenance services.
Built with React, Vite, and Material UI (MUI), featuring a modern, responsive design optimized for production.

## 🛠️ Tech Stack
React – UI library
Vite – Fast and lightweight bundler
Material UI – UI components
Framer Motion – Smooth animations
[ESLint + Prettier] – Code style and linting

## 📂 Project Structure
landing-insiic/ ├── public/ # Static assets ├── src/ │ ├── components/ # Reusable components │ ├── sections/ # Landing sections (Hero, Services, Footer, etc.) │ ├── theme/ # Custom MUI theme │ ├── App.jsx │ └── main.jsx ├── vite.config.js # Vite configuration └── package.json

## 🚀 Getting Started
Clone the repository: git clone https://github.com/your-username/landing-insiic.git cd landing-insiic

Install dependencies: npm install

Run the development server: npm run dev

Access in your browser: http://localhost:5173/

## 🌐 Access on your local network
If you want to test it from another device on the same network:

Edit vite.config.js and add: server: { host: true, port: 5173, }

## 📦 Production Build
npm run build npm run preview

This generates the dist/ folder ready for deployment.


```
landing-insiic
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ aire
│  │  │  │  ├─ cabinas pintura
│  │  │  │  │  └─ cabinas para pintura.webp
│  │  │  │  ├─ colector de polvo
│  │  │  │  │  ├─ extractor-de-aire-colector-de-polvo-electrico-aerosystem-1024.webp
│  │  │  │  │  └─ Montaje-colector-de-polvo.png
│  │  │  │  ├─ lavado_y_acondicionado
│  │  │  │  │  ├─ aire acondicionado.mp4
│  │  │  │  │  ├─ aire lavado cooler.jpeg
│  │  │  │  │  ├─ aire lavado.jpeg
│  │  │  │  │  ├─ cabinas de aire lavado de gran capacidad.jpeg
│  │  │  │  │  ├─ centrales de aire lavado.jpeg
│  │  │  │  │  ├─ ducteria cuadrada.jpeg
│  │  │  │  │  ├─ ducterias cuadradas 2.jpeg
│  │  │  │  │  ├─ ducterias cuadradas.jpeg
│  │  │  │  │  ├─ ducterias para centrales de aire lavado.jpeg
│  │  │  │  │  ├─ minisplit.jpeg
│  │  │  │  │  └─ sistemas UMA.jpeg
│  │  │  │  ├─ Logo.webp
│  │  │  │  └─ mecanico
│  │  │  │     ├─ chilers extractor axial con carcasa de gran volumen de aire.mp4
│  │  │  │     ├─ ducteria redonda 2.jpeg
│  │  │  │     ├─ ducteria redonda 3.jpeg
│  │  │  │     ├─ ducteria redonda.jpeg
│  │  │  │     ├─ ducteria redonda.mp4
│  │  │  │     ├─ ducto instalado.jpeg
│  │  │  │     ├─ ductos redondos.jpeg
│  │  │  │     ├─ extractor atmoesferico 18pulgadas.jpeg
│  │  │  │     ├─ extractor atmoesferico 36pulgadas.jpeg
│  │  │  │     ├─ extractor electrico axial.jpeg
│  │  │  │     ├─ extractores atomosfericos.mp4
│  │  │  │     ├─ turbina axial.mp4
│  │  │  │     └─ turbina centrifuga para inyeccion y extraccion.jpeg
│  │  │  ├─ certificados
│  │  │  │  ├─ ANSUL.png
│  │  │  │  ├─ certificado NFPA.jpeg
│  │  │  │  ├─ NFPA.png
│  │  │  │  ├─ repse.jfif
│  │  │  │  └─ STPS.jfif
│  │  │  ├─ Equipos de contra incendios de supresión  para almacenamiento de gases avise de agua y químicos contá incendio
│  │  │  ├─ Equipos de detección sertificados  instalación, ingeniería, proyectos y mantenimientos preventivos e correctivos en detección de  humos, calor y gases
│  │  │  ├─ redesContraIncendio
│  │  │  │  ├─ equipo supresion cocinas
│  │  │  │  ├─ InstalacionEquiposNormandos
│  │  │  │  │  └─ Logo.jpeg
│  │  │  │  ├─ Instalación  de equipos  contra incendios  nacionales NOM mexicana
│  │  │  │  ├─ Logo.jpeg
│  │  │  │  └─ Mantenimientos en equipos contra incendio para agua certificados normados uLFM
│  │  │  ├─ soldaduraEspecial
│  │  │  │  ├─ Logo.jpeg
│  │  │  │  ├─ ProyectoEscalera1.jpeg
│  │  │  │  ├─ ProyectoEscalera2.jpeg
│  │  │  │  ├─ ProyectoEscalera3.jpeg
│  │  │  │  └─ ProyectoEscalera4.jpeg
│  │  │  └─ Suministro  e instalación  de redes contra incendios, ingeniería en equipos nacionales NOM mexicana y  equipos  normados UL  FM
│  │  └─ logo.jpeg
│  ├─ components
│  │  ├─ BackgroundOverlay.tsx
│  │  ├─ EmailButton.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Navbar.tsx
│  │  └─ ProjectModal.tsx
│  ├─ config
│  │  └─ links.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ home
│  │  │  ├─ AboutUs.tsx
│  │  │  ├─ CallToAction.tsx
│  │  │  ├─ FAQ.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ Portfolio.tsx
│  │  │  └─ Services.tsx
│  │  └─ service
│  │     ├─ Aire.tsx
│  │     ├─ Incendio.tsx
│  │     └─ Supresion.tsx
│  ├─ routes
│  │  ├─ Home.tsx
│  │  └─ Service.tsx
│  ├─ theme
│  │  ├─ mui.d.ts
│  │  └─ theme.ts
│  ├─ utils
│  │  └─ ScrollToTop.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```