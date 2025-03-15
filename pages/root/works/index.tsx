import type { RouteComponent } from 'retend/router';

const Works: RouteComponent = () => {
  return <div>This is the works page.</div>;
};

Works.metadata = {
  title: 'My Works | Oluwasefunmi, Web Developer',
  description: 'This is the works page',
};

export default Works;
