import { defineConfig } from 'vite';
import path from 'node:path';
import { retend } from 'retend/plugin';
import { retendSSG } from 'retend-server/plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './') },
  },
  plugins: [
    tailwindcss(),
    retend(),
    retendSSG({
      pages: ['/', '/works', '/contact', '/random-notes', '/playground'],
      routerModulePath: './router.ts',
    }),
  ],
});
