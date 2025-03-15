import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';

const Playground: RouteComponent<PageMeta> = () => {
  return <div>This is the playground page.</div>;
};

Playground.metadata = {
  title: 'Playground | Oluwasefunmi, Web Developer',
  description: 'This is the playground page',
};

export default Playground;
