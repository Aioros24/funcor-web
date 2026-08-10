import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configured relative base path for seamless GitHub Pages deployment (user page & subdirectory compatibility)
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
