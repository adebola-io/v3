import type { RouteComponent } from '@adbl/unfinished/router';

const Playground: RouteComponent = () => {
  return <div>This is the playground page.</div>;
};

Playground.metadata = {
  title: 'Playground | Oluwasefunmi, Web Developer',
  description: 'This is the playground page',
};

export default Playground;
