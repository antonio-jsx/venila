import { Brand } from '@/admin/_components/brand';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="flex items-center border-b bg-background shadow-slate-900/5 shadow-xs">
        <div className="container flex items-center justify-between border-x px-6">
          <Brand />
          <Menu />
          <NavUser />
        </div>
      </header>
      <main className="container relative px-6 py-8">
        {children}

        <div className="pointer-events-none absolute top-0 left-0 h-full w-px bg-gradient-to-b from-border to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-px bg-gradient-to-b from-border to-transparent" />
      </main>
    </>
  );
}
