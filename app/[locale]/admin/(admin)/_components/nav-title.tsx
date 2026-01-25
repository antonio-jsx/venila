import { SectionTitle } from '@/components/section-title';

export function NavTitle({
  text,
  children,
}: {
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mb-6 flex shrink-0 items-center gap-2">
      {text && <SectionTitle>{text}</SectionTitle>}

      <div className="ml-auto flex items-center gap-2">{children}</div>
    </section>
  );
}
