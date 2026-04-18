import { Tickets } from '@/app/(home)/_components/tickets';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ClockIcon, MailCheckIcon, TicketsIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('home');

  const options = [t('section_event.option_a'), t('section_event.option_b')];
  const features = [
    {
      title: t('section_feature.ticketing.title'),
      subtitle: t('section_feature.ticketing.subtitle'),
      icon: TicketsIcon,
    },
    {
      title: t('section_feature.setup.title'),
      subtitle: t('section_feature.setup.subtitle'),
      icon: ClockIcon,
    },
    {
      title: t('section_feature.confirmation.title'),
      subtitle: t('section_feature.confirmation.subtitle'),
      icon: MailCheckIcon,
    },
  ];

  return (
    <>
      <section>
        <div className="space-y-2 border-y-2 border-dashed bg-muted">
          <div className="container relative p-8">
            <p className="text-center text-muted-foreground">
              {t('section_feature.title')}
            </p>
            <h3 className="text-center font-semibold text-2xl">
              {t('section_feature.subtitle')}
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-2 items-center gap-8 border-x-2 border-dashed p-8 pb-4">
          <div className="group relative scale-85 select-none space-y-2">
            <Tickets className="-ml-4 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-105" />
            <Tickets className="-mr-10 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:rotate-1 group-hover:scale-105" />
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl">{t('section_event.title')}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container grid grid-cols-3 gap-4 border-x-2 border-dashed p-8 pt-0">
          {features.map((feature) => (
            <Card size="sm" key={feature.title}>
              <div className="ml-4 flex size-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-600">
                <feature.icon className="stroke-indigo-400 dark:stroke-indigo-300" />
              </div>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.subtitle}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
