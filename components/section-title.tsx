import type { PropsWithChildren } from 'react';

export function SectionTitle({
  children,
  subtitle,
}: PropsWithChildren<{
  subtitle?: string;
}>) {
  return (
    <div>
      <p className="font-semibold text-2xl text-foreground tracking-tight">
        {children}
      </p>
      {subtitle && (
        <span className="block text-muted-foreground text-sm">{subtitle}</span>
      )}
    </div>
  );
}
