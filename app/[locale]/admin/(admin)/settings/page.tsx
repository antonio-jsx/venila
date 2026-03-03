import { NavTitle } from '@/admin/_components/nav-title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    <Tabs className="gap-0 space-y-5" defaultValue="payment">
      <NavTitle text={t('title')} subtitle={t('subtitle')}>
        <TabsList>
          <TabsTrigger value="payment">{t('tabs.payment')}</TabsTrigger>
          <TabsTrigger value="integration">{t('tabs.integration')}</TabsTrigger>
        </TabsList>
      </NavTitle>

      <TabsContent className="space-y-5" value="payment"></TabsContent>

      <TabsContent value="integration">
        <strong>{t('tabs.integration')}</strong>
      </TabsContent>
    </Tabs>
  );
}
