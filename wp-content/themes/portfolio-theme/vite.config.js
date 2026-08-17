import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  // Relative base: the theme can be installed under any WordPress site path,
  // so built CSS must reference its own font/asset files relatively rather
  // than assuming assets live at domain root.
  base: './',
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
