import { createWebRouter } from '@adbl/unfinished/router';
import { waitingRoute } from './views/waiting/routes';

export function createRouter() {
  const routes = [
    {
      name: 'App',
      path: '/',
      children: [waitingRoute],
    },
  ];
  return createWebRouter({ routes });
}
