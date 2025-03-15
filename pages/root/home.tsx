import type { RouteComponent } from 'retend/router';

const Home: RouteComponent = () => {
  return <div>This is the home page.</div>;
};

Home.metadata = {
  title: 'Oluwasefunmi, Web Developer',
  description: 'This is the home page',
};

export default Home;
