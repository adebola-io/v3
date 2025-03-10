import { defineRoute } from '@adbl/unfinished/router';
import RootLayout from '.';
import Home from './home';
import Works from './works';
import Contact from './contact';
import RandomNotes from './random-notes';
import Playground from './playground';

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
      component: Works,
    },
    {
      name: 'Website Contact',
      path: 'contact',
      component: Contact,
    },
    {
      name: 'Website Random Notes',
      path: 'random-notes',
      component: RandomNotes,
    },
    {
      name: 'Website Playground',
      path: 'playground',
      component: Playground,
    },
  ],
});
