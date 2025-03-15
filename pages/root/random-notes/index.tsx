import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';

const RandomNotes: RouteComponent<PageMeta> = () => {
  return <div>This is the random page.</div>;
};

RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  description: 'This is the random notes page',
};

export default RandomNotes;
