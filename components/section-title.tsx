export function SectionTitle({
  children,
  subtitle,
}: {
  children?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 font-medium text-primary text-xs uppercase">
        <span className="size-2 rounded-full bg-primary"></span>
        {children}
      </p>
      {subtitle && (
        <span className="mt-0.5 block text-muted-foreground text-sm">
          {subtitle}
        </span>
      )}
    </div>
  );
}
