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
