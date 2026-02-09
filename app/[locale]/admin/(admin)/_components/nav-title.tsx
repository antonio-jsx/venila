import { SectionTitle } from '@/components/section-title';

export function NavTitle({
  text,
  subtitle,
  children,
}: {
  text?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mb-4 flex shrink-0 items-center gap-2">
      {text && <SectionTitle subtitle={subtitle}>{text}</SectionTitle>}

      <div className="ml-auto flex items-center gap-2">{children}</div>
    </section>
  );
}
