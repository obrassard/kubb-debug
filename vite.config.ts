import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    postcss: {
      // @ts-expect-error - Vite types are not up-to-date
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [svgr(), reactRouter(), tsconfigPaths()],
});
