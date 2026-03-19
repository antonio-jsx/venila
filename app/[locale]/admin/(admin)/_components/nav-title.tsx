import { SectionTitle } from '@/components/section-title';

type Props = {
  text?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function NavTitle({ text, subtitle, children }: Props) {
  return (
    <section className="flex shrink-0 items-center gap-2">
      {text && <SectionTitle subtitle={subtitle}>{text}</SectionTitle>}

      <div className="ml-auto flex items-center gap-2">{children}</div>
    </section>
  );
}
