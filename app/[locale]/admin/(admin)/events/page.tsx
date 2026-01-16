import { NavHeader } from '@/admin/_components/nav-header';
import { CreateEvent } from '@/admin/events/_components/create-event';
import { ListEvents } from '@/admin/events/_components/list-events';
import { LoadingEvent } from '@/admin/events/_components/loading-event';
import { loadSearchParams } from '@/lib/searchParams';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/ui/table';
import { Search } from './_components/search';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

export default async function EventsPage({
  params,
  searchParams,
}: PageProps<'/[locale]/admin/events'>) {
  const { locale } = (await params) as { locale: Locale };
  const t = await getTranslations({ locale, namespace: 'admin.events' });
  const { q } = await loadSearchParams(searchParams);

  return (
    <>
      <NavHeader title={t('title')}>
        <CreateEvent />
      </NavHeader>

      <section className="px-6 py-4">
        <Search />
      </section>

      <section className="space-y-4">
        <div className="relative flex flex-col gap-4 overflow-auto border-y">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted/50">
              <TableRow>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>{t('columns.date')}</TableHead>
                <TableHead>{t('columns.status')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense fallback={<LoadingEvent />}>
                <ListEvents search={q} />
              </Suspense>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
