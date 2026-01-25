import { Brand } from './_components/brand';
import { Menu } from './_components/menu';
import { NavUser } from './_components/nav-user';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="flex items-center bg-background shadow-sm">
        <div className="container flex items-center justify-between border-x px-5">
          <Brand />
          <Menu />
          <NavUser />
        </div>
      </header>
      <main className="container border-x px-5 py-8">{children}</main>
    </>
  );
}
