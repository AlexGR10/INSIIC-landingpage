/**
 * @file vite.config.ts
 * @brief This file contains the configuration for the Vite build tool.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Plugins used by Vite.
  plugins: [react()],
  // Build configuration.
  build: {
    // The output directory for the build.
    outDir: 'dist',
    // Whether to generate source maps.
    sourcemap: false
  },
  // Development server configuration.
  server: {
    // Whether to expose the server to the network.
    host: true, 
    // The port to run the server on.
    port: 5173,  
  },
  // The base public path when served in production.
  base: '/'
})
