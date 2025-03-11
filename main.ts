/// <reference types="vite/client" />
import { hydrate } from '@adbl/unfinished-ssg/client';
import { createRouter } from './router';

hydrate(createRouter).then(() => {
  console.log('[unfinished-ssg] app successfully hydrated.');
});

// -----------------------------------------------------------------------------
// STATIC MODE. Will not add any client-side hydration.
// -----------------------------------------------------------------------------
// if (import.meta.env.DEV) {
//   const { hydrate } = await import('@adbl/unfinished-ssg/client');
//   const { createRouter } = await import('./router');

//   const router = await hydrate(createRouter);
//   await router.navigate(window.location.pathname);
//   console.log('[unfinished-ssg] app successfully hydrated.');
// }
