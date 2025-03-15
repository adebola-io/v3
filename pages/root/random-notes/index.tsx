import type { RouteComponent } from 'retend/router';

const RandomNotes: RouteComponent = () => {
  return <div>This is the random page.</div>;
};

RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  description: 'This is the random notes page',
};

export default RandomNotes;
