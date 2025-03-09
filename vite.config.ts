import { defineConfig } from 'vite';
import path from 'node:path';
import { unfinished } from '@adbl/unfinished/plugin';
import { unfinishedSSG } from '@adbl/unfinished-ssg/plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './source') },
  },
  plugins: [
    tailwindcss(),
    unfinished(),
    unfinishedSSG({
      pages: ['/'],
      routerModulePath: './source/router.ts',
    }),
  ],
});
