import { NavUser } from '@/admin/_components/nav-user';
import { Brand } from '@/components/brand';
import { Menu } from './_components/menu';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center">
        <div className="relative flex w-full items-center justify-between gap-1 px-4 py-2">
          <Brand path="/admin" />

          <div className="flex shrink-0 items-center">
            <NavUser />
          </div>
        </div>
      </header>

      <main className="container relative mt-11 space-y-5 px-8 py-4">
        {children}
      </main>

      <Menu />
    </>
  );
}
