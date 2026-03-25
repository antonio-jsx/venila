import type { PropsWithChildren } from 'react';

export function SectionTitle({
  children,
  subtitle,
}: PropsWithChildren<{
  subtitle?: string;
}>) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-lg">
        <span className="size-2 rounded-full bg-primary"></span>
        {children}
      </p>
      {subtitle && (
        <span className="block text-muted-foreground text-sm">{subtitle}</span>
      )}
    </div>
  );
}
