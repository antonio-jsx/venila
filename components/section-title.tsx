export function SectionTitle({ children }: { children?: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1 font-medium text-indigo-700 text-xs uppercase">
      <span className="size-2 rounded-full bg-indigo-700"></span>
      {children}
    </p>
  );
}
