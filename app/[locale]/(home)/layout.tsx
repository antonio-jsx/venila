import { Button } from '@/components/ui/button';
import HeroImage from './_components/hero-image';
import { Menu } from './_components/menu';

export default function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <>
      <header>
        <Menu />
        <div className="container relative flex flex-col items-center gap-3 pt-30 pb-5">
          <div className="flex flex-col items-center justify-center">
            <div className="flex max-w-3xl flex-col items-center text-center">
              <h1 className="mb-2 font-bold text-6xl">
                La plataforma moderna para gestionar eventos
              </h1>
              <p className="max-w-lg font-medium text-muted-foreground">
                Crea, gestiona y promociona eventos de cualquier escala. Desde
                reuniones íntimas hasta conferencias masivas.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Button className="h-8" size="lg">
                Crea tu evento
              </Button>
              <Button className="h-8" size="lg" variant="secondary">
                Explorar eventos
              </Button>
            </div>

            <HeroImage />
          </div>
        </div>
      </header>

      {children}
    </>
  );
}
