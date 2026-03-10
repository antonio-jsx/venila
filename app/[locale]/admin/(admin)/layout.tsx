import { Brand } from '@/admin/_components/brand';
import { CreateLink } from '@/admin/_components/create-link';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center border-b bg-background shadow-xs dark:bg-card">
        <div className="container grid h-12 grid-cols-3 items-center gap-1 border-x px-6">
          <Brand />
          <Menu />

          <div className="szz flex items-center gap-1 justify-self-end">
            <CreateLink />
            <NavUser />
          </div>
        </div>
      </header>
      <main className="container relative mt-12 space-y-5 border-x p-8">
        {children}
      </main>
    </>
  );
}
