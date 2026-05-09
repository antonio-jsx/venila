import { Brand } from '@/components/brand';
import { Badge } from '@/components/ui/badge';
import { CheckIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  const t = await getTranslations('home');

  const checks = [t('check.create'), t('check.sell'), t('check.available')];

  return (
    <>
      <header>
        <div className="container relative top-0 gap-3 py-10">
          <div className="relative space-y-8">
            <div className="inline-flex items-center gap-2 font-bold text-2xl">
              <Brand path="/" /> Venila
            </div>
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-accent text-foreground">{t('badge')}</Badge>
              <h1 className="font-semibold text-5xl leading-[1.1] tracking-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('subtitle')}
              </p>

              <ul className="flex items-center gap-4 font-light text-muted-foreground text-sm">
                {checks.map((check) => (
                  <li className="flex items-center gap-0.5" key={check}>
                    <CheckIcon className="stroke-green-600" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {children}
    </>
  );
}
