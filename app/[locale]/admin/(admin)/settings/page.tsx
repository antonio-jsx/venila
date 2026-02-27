import { NavTitle } from '@/admin/_components/nav-title';
import { CardMercadopago } from '@/admin/settings/_components/card-mp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mercadopago } from './_components/mp';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function SettingsPage({
  params,
}: PageProps<'/[locale]/admin/settings'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('admin.settings');

  return (
    <Tabs className="space-y-5" defaultValue="payment">
      <NavTitle text={t('title')} subtitle={t('subtitle')}>
        <TabsList>
          <TabsTrigger value="payment">{t('tabs.payment')}</TabsTrigger>
          <TabsTrigger value="integration">{t('tabs.integration')}</TabsTrigger>
        </TabsList>
      </NavTitle>

      <TabsContent value="payment">
        <div className="grid grid-cols-3 gap-5">
          <CardMercadopago />
        </div>
      </TabsContent>

      <TabsContent value="integration">
        <strong>{t('tabs.integration')}</strong>
      </TabsContent>

      <Mercadopago />
    </Tabs>
  );
}
