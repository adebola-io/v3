import { defineRoute } from '@adbl/unfinished/router';
import Start from '.';

export const waitingRoute = defineRoute({
  name: 'Waiting View',
  path: '/waiting',
  component: Start,
});
