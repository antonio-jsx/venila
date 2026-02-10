import { SectionTitle } from '@/components/section-title';
import { Menu } from './_components/menu';

export default function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <>
      <header>
        <Menu />
        <div className="container relative flex flex-col items-center justify-center gap-3 border-x pt-20 pb-10">
          <SectionTitle>Plataforma de gestion de eventos</SectionTitle>
          <h1 className="font-semibold text-7xl">
            Organiza tus <span className="text-primary">eventos</span>
          </h1>
          <p className="max-w-lg text-center font-mono text-lg text-muted-foreground">
            Somos una herramienta creada para organizar ventas, asistentes y
            eventos que sea fácil de usar.
          </p>
        </div>
      </header>

      {children}
    </>
  );
}
