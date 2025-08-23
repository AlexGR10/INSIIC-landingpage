# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
landing-insiic
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
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
│  │  │  │  └─ certificado NFPA.jpeg
│  │  │  ├─ Equipos de contra incendios de supresión  para almacenamiento de gases avise de agua y químicos contá incendio
│  │  │  ├─ Equipos de detección sertificados  instalación, ingeniería, proyectos y mantenimientos preventivos e correctivos en detección de  humos, calor y gases
│  │  │  ├─ redes contra incendio
│  │  │  │  ├─ equipo supresion cocinas
│  │  │  │  ├─ Instalación  de equipos  contra incendios  nacionales NOM mexicana
│  │  │  │  ├─ Instalación  de equipos  contra incendios normandos UL. FM
│  │  │  │  └─ Mantenimientos en equipos contra incendio para agua certificados normados uLFM
│  │  │  └─ Suministro  e instalación  de redes contra incendios, ingeniería en equipos nacionales NOM mexicana y  equipos  normados UL  FM
│  │  └─ logo.jpeg
│  ├─ components
│  │  └─ Navbar.tsx
│  ├─ config
│  │  └─ links.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  └─ 2Section.tsx
│  ├─ routes
│  │  └─ Home.tsx
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