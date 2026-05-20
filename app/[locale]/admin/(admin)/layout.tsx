import { CreateLink } from '@/admin/_components/create-link';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';
import { Brand } from '@/components/brand';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur">
        <div className="relative mx-auto flex h-12 max-w-6xl items-center justify-between gap-3">
          <Brand path="/admin" />

          <div className="container flex items-center">
            <Menu />

            <div className="flex shrink-0 items-center">
              <CreateLink />
            </div>
          </div>

          <NavUser />
        </div>
      </header>

      <div className="pointer-events-none fixed top-0 h-10 w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />

      <main className="container relative mt-12 space-y-5 py-8">
        {children}
      </main>
    </>
  );
}
