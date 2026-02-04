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
    <Tabs defaultValue="account">
      <NavTitle text={t('title')} subtitle={t('subtitle')}>
        <TabsList>
          <TabsTrigger value="account">{t('tabs.account')}</TabsTrigger>
          <TabsTrigger value="payment">{t('tabs.payment')}</TabsTrigger>
          <TabsTrigger value="integration">{t('tabs.integration')}</TabsTrigger>
        </TabsList>
      </NavTitle>

      <TabsContent value="account">
        <strong>{t('tabs.account')}</strong>
      </TabsContent>

      <TabsContent value="payment">
        <strong>{t('tabs.payment')}</strong>
      </TabsContent>

      <TabsContent value="integration">
        <strong>{t('tabs.integration')}</strong>
      </TabsContent>
    </Tabs>
  );
}
