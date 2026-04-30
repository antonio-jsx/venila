import { CreateLink } from '@/admin/_components/create-link';
import { Menu } from '@/admin/_components/menu';
import { NavUser } from '@/admin/_components/nav-user';
import { Brand } from '@/components/brand';
import { Separator } from '@/components/ui/separator';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur">
        <div className="relative mx-auto flex h-12 max-w-6xl items-center justify-between gap-3">
          <Brand path="/admin" />

          <Separator className="my-auto h-4" orientation="vertical" />

          <Menu />

          <div className="flex shrink-0 items-center">
            <CreateLink />
          </div>

          <NavUser />
        </div>
      </header>

      <main className="container relative mt-12 space-y-5 py-6">
        {children}
      </main>
    </>
  );
}
