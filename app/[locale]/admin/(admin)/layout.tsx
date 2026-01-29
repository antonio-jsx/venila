import { Brand } from './_components/brand';
import { Menu } from './_components/menu';
import { NavUser } from './_components/nav-user';

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
      <main className="container border-x px-6 py-8">{children}</main>
    </>
  );
}
