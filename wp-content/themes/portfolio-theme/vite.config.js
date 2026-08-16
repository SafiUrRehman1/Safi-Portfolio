import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      input: {
        main: 'src/js/main.js',
        css: 'src/css/tailwind.css',
      },
    },
  },
});
