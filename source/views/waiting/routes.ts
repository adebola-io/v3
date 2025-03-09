import { defineRoute } from '@adbl/unfinished/router';
import Start from '.';

export const waitingRoute = defineRoute({
  name: 'Start View',
  path: '/',
  component: Start,
});
