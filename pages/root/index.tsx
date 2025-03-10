import { For } from '@adbl/unfinished';
import { useRouter } from '@adbl/unfinished/router';

export default function RootLayout() {
  const { Link, Outlet } = useRouter();
  const links = [
    {
      name: 'home',
      path: '/home',
    },
    {
      name: 'works',
      path: '/works',
    },
    {
      name: 'contact',
      path: '/contact',
    },
    {
      name: 'random notes',
      path: '/random-notes',
    },
    {
      name: 'playground',
      path: '/playground',
    },
  ];

  return (
    <main class="px-4 pt-2 background min-h-[100dvh]">
      <nav class="grid grid-cols-[repeat(5,auto)_1fr] gap-2 [&>*]:[align-self:center] h-4">
        {For(links, (link) => (
          <Link
            class={[
              'inline-block pb-[calc(var(--spacing)*.25)] px-0.5 relative text-nowrap [[active]]:font-bold',
              'before:block before:absolute before:bottom-0 before:w-full before:h-[2px] before:rounded-xl before:bg-[#727272] before:scale-[0_1] before:duration-[var(--duration)] before:transition-[scale] before:[transform-origin:0%_0%]',
              'not-hover:before:delay-[calc(var(--duration)*.75)] hover:before:scale-100',
            ]}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}
