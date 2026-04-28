import { NavTitle } from '@/admin/_components/nav-title';
import { ListEvents } from '@/admin/(events)/_components/list-events';
import { removeEvent } from '@/admin/(events)/action';
import { loadSearchParams } from '@/admin/(events)/search-params';
import { Remove } from '@/components/remove';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('admin.events');
  return { title: t('title') };
}

export default async function EventsPage({
  searchParams,
}: PageProps<'/[locale]/admin'>) {
  const tPromise = getTranslations('admin.events');
  const filterPromise = loadSearchParams(searchParams);
  const [t, { page }] = await Promise.all([tPromise, filterPromise]);

  return (
    <>
      <div className="space-y-6">
        <NavTitle subtitle={t('subtitle')} text={t('title')} />

        <ListEvents page={page} />
      </div>

      <Remove action={removeEvent} />
    </>
  );
}
