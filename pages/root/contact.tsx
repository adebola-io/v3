import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';

const Contact: RouteComponent<PageMeta> = () => {
  return <div>This is the contact page.</div>;
};

Contact.metadata = {
  title: 'Contact Me | Oluwasefunmi, Web Developer',
  description: 'This is the contact page',
};

export default Contact;
