export function NavHeader({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-6 flex shrink-0 items-center gap-2">
      {title && <h1 className="font-medium text-base">{title}</h1>}

      <div className="ml-auto flex items-center gap-2">{children}</div>
    </header>
  );
}
