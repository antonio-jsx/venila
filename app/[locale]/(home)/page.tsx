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

  const features = [
    {
      title: t('section_feature.setup.title'),
      subtitle: t('section_feature.setup.subtitle'),
      icon: ClockIcon,
    },
    {
      title: t('section_feature.ticketing.title'),
      subtitle: t('section_feature.ticketing.subtitle'),
      icon: TicketsIcon,
    },
    {
      title: t('section_feature.confirmation.title'),
      subtitle: t('section_feature.confirmation.subtitle'),
      icon: MailCheckIcon,
    },
  ];

  return (
    <section>
      <div className="container">
        <h3 className="mb-3 text-muted-foreground text-sm uppercase">
          {t('section_feature.title')}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature) => (
            <Card key={feature.title} size="sm">
              <div className="ml-4 flex size-8 items-center justify-center rounded-lg bg-indigo-400 dark:bg-indigo-600">
                <feature.icon className="stroke-white" />
              </div>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.subtitle}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
