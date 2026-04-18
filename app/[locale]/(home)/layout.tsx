import { Button } from '@/components/ui/button';
import HeroImage from './_components/hero-image';
import { Menu } from './_components/menu';
import { getTranslations } from 'next-intl/server';

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  const t = await getTranslations('home');

  return (
    <>
      <header>
        <Menu />
        <div className="container relative top-0 flex flex-col items-center gap-3 border-x-2 border-dashed pt-30 pb-5">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                  linear-gradient(to right, var(--input) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--input) 1px, transparent 1px)
                `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 0',
              maskImage: `repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                      ),
                      repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                      ),
                      radial-gradient(ellipse 70% 35% at 50% 0%, #000 60%, transparent 100%)
                `,
              WebkitMaskImage: `repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                      ),
                      repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                      ),
                      radial-gradient(ellipse 70% 35% at 50% 0%, #000 60%, transparent 100%)
                `,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          />
          <div className="relative flex flex-col items-center justify-center">
            <div className="flex max-w-3xl flex-col items-center text-center">
              <h1 className="mb-2 font-bold text-6xl">{t('title')}</h1>
              <p className="max-w-lg text-muted-foreground">{t('subtitle')}</p>
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
