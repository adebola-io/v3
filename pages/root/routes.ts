import { defineRoute, lazy } from '@adbl/unfinished/router';
import RootLayout from '.';
import Home from './home';

export const rootRoutes = defineRoute({
  name: 'Website Root',
  path: '',
  redirect: '/home',
  component: RootLayout,
  children: [
    {
      name: 'Website Home',
      path: 'home',
      component: Home,
    },
    {
      name: 'Website Works',
      path: 'works',
      component: lazy(() => import('./works/index.tsx')),
    },
    {
      name: 'Website Contact',
      path: 'contact',
      component: lazy(() => import('./contact.tsx')),
    },
    {
      name: 'Website Random Notes',
      path: 'random-notes',
      component: lazy(() => import('./random-notes/index.tsx')),
    },
    {
      name: 'Website Playground',
      path: 'playground',
      component: lazy(() => import('./playground/index.tsx')),
    },
  ],
});
