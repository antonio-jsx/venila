export function Header({ title }: { title: string }) {
  return (
    <h1 className="mb-2 text-4xl italic leading-[1.1] tracking-tight">
      {title}
    </h1>
  );
}
