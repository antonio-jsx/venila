import { CreateLink } from '@/admin/_components/create-link';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';
import { Brand } from '@/components/brand';
import { Decorator } from '@/components/decorator';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center border-b bg-card shadow-xs">
        <div className="container relative flex h-12 items-center justify-between gap-1 border-x px-5">
          <Brand path="/admin" />

          <Menu />

          <div className="flex items-center justify-end gap-1">
            <CreateLink />
            <NavUser />
          </div>

          <Decorator />
        </div>
      </header>
      <main className="container relative mt-12 space-y-5 border-x px-6 py-8">
        {children}
      </main>
    </>
  );
}
