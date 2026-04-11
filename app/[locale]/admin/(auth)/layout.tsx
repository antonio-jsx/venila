import { Brand } from '@/components/brand';

export default function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-4">
      <Brand path="/" />
      {children}
    </main>
  );
}
