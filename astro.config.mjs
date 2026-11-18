import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ihorkalchenko.github.io',
  integrations: [react()],
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client']
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'import', 'slash-div', 'global-builtin']
        }
      }
    }
  }
});
