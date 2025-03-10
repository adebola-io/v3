import { defineConfig } from 'vite';
import path from 'node:path';
import { unfinished } from '@adbl/unfinished/plugin';
import { unfinishedSSG } from '@adbl/unfinished-ssg/plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './') },
  },
  plugins: [
    tailwindcss(),
    unfinished(),
    unfinishedSSG({
      pages: ['/', '/works', '/contact', '/random-notes', '/playground'],
      routerModulePath: './router.ts',
    }),
  ],
});
