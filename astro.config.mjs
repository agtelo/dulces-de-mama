import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Cambiá `site` cuando tengas la URL final de Vercel o el dominio propio.
export default defineConfig({
  site: 'https://dulces-de-mama.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
