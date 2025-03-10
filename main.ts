/// <reference types="vite/client" />
import { hydrate } from '@adbl/unfinished-ssg/client';
import { createRouter } from './router';

hydrate(createRouter).then(() => {
  console.log('[unfinished-ssg] app successfully hydrated.');
});
