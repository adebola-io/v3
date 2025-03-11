import type { RouteComponent } from '@adbl/unfinished/router';

const Contact: RouteComponent = () => {
  return <div>This is the contact page.</div>;
};

Contact.metadata = {
  title: 'Contact Me | Oluwasefunmi, Web Developer',
  description: 'This is the contact page',
};

export default Contact;
