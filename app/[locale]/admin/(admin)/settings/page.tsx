import { NavTitle } from '@/admin/_components/nav-title';
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
    <>
      <NavTitle text={t('title')} subtitle={t('subtitle')} />
    </>
  );
}
