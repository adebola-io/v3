import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';

const Home: RouteComponent<PageMeta> = () => {
  return <div>This is the home page.</div>;
};

Home.metadata = {
  title: 'Oluwasefunmi, Web Developer',
  description: 'This is the home page',
};

export default Home;
