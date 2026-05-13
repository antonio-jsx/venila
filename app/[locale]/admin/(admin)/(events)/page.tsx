import { NavTitle } from '@/admin/_components/nav-title';
import { ListEvents } from '@/admin/(events)/_components/list-events';
import { removeEvent } from '@/admin/(events)/action';
import { getEvents } from '@/admin/(events)/query';
import { loadSearchParams } from '@/admin/(events)/search-params';
import { Remove } from '@/components/remove';
import { ChartColumnIcon } from 'lucide-react';
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
  const eventsPromise = filterPromise.then(({ page }) => getEvents({ page }));

  const [t, { page }, events] = await Promise.all([
    tPromise,
    filterPromise,
    eventsPromise,
  ]);

  return (
    <>
      <div className="container space-y-6">
        <NavTitle subtitle={t('subtitle')} text={t('title')}>
          <p className="flex items-center gap-1 rounded-3xl border px-3 py-1.5 text-muted-foreground text-sm shadow-xs">
            <ChartColumnIcon className="size-4" />
            {t('totalEvents', { total: events.pagination.total })}
          </p>
        </NavTitle>

        <ListEvents actualPage={page} value={events} />
      </div>

      <Remove action={removeEvent} />
    </>
  );
}
