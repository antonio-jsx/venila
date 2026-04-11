import { NavUser } from '@/admin/_components/nav-user';
import { Brand } from '@/components/brand';
import { Menu } from './_components/menu';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center">
        <div className="relative flex h-12 w-full items-center justify-between gap-1 px-6">
          <Brand path="/admin" />

          <div className="flex shrink-0 items-center">
            <NavUser />
          </div>
        </div>
      </header>

      <main className="container relative mt-12 space-y-5 px-2 pb-4">
        {children}
      </main>

      <Menu />
    </>
  );
}
