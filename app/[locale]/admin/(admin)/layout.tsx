import { Brand } from '@/admin/_components/brand';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';
import { CreateLink } from '@/admin/events/_components/create-link';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="flex items-center border-b bg-background shadow-xs dark:bg-card">
        <div className="container grid grid-cols-3 items-center gap-1 border-x px-6">
          <Brand />
          <Menu />

          <div className="szz flex items-center gap-1 justify-self-end">
            <CreateLink />
            <NavUser />
          </div>
        </div>
      </header>
      <main className="container relative space-y-5 border-x px-8 py-6">
        {children}
      </main>
    </>
  );
}
