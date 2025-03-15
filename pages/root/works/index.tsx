import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';

const Works: RouteComponent<PageMeta> = () => {
  return <div>This is the works page.</div>;
};

Works.metadata = {
  title: 'My Works | Oluwasefunmi, Web Developer',
  description: 'This is the works page',
};

export default Works;
