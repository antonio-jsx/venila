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

          <div className="flex gap-2 justify-self-end">
            <CreateLink />
            <NavUser />
          </div>
        </div>
      </header>
      <main className="container relative p-8">
        {children}

        <div className="pointer-events-none absolute top-0 left-0 h-full w-px bg-gradient-to-b from-border to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-px bg-gradient-to-b from-border to-transparent" />
      </main>
    </>
  );
}
