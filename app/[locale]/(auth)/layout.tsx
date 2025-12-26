export default function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <main className="flex h-svh flex-col items-center justify-center bg-neutral-50">
      {children}
    </main>
  );
}
