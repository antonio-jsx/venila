import { NavTitle } from '@/admin/_components/nav-title';
import { ListEvents } from '@/admin/(events)/_components/list-events';
import { removeEvent } from '@/admin/(events)/action';
import { Remove } from '@/components/remove';
import { loadfilterParams } from '@/lib/searchParams';
import type { Metadata } from 'next';
import { locale as rootLocale } from 'next/root-params';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await rootLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'admin.events' });
  return { title: t('title') };
}

export default async function EventsPage({
  searchParams,
}: PageProps<'/[locale]/admin'>) {
  const locale = (await rootLocale()) as Locale;
  const tPromise = getTranslations({ locale, namespace: 'admin.events' });
  const filterPromise = loadfilterParams(searchParams);
  const [t, { page }] = await Promise.all([tPromise, filterPromise]);

  return (
    <>
      <NavTitle text={t('title')} subtitle={t('subtitle')} />

      <ListEvents page={page} />

      <Remove action={removeEvent} />
    </>
  );
}
