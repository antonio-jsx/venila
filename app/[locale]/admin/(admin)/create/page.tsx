import { CreateEvent } from '@/admin/create/_components/create-event';
import type { Metadata } from 'next';
import { locale as rootLocale } from 'next/root-params';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await rootLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'admin.events.form' });
  return { title: t('title') };
}

export default function CreatePage() {
  return <CreateEvent />;
}
