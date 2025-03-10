import type { JSX } from '@adbl/unfinished/jsx-dev-runtime';

type HeadingTextProps = JSX.IntrinsicElements['h1'];

export function HugeText(props: HeadingTextProps) {
  const { children, ...rest } = props;
  return (
    <h1
      {...rest}
      class={[
        'inline-block text-[clamp(20dvh,150px,70dvw)] leading-[1.4] text-[#555555]',
        rest.class,
      ]}
    >
      {children}
    </h1>
  );
}
