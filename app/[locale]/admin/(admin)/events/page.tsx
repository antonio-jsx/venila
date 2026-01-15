import { NavHeader } from '@/admin/_components/nav-header';
import { CreateEvent } from '@/admin/events/_components/create-event';
import { ListEvents } from '@/admin/events/_components/list-events';
import { LoadingEvent } from '@/admin/events/_components/loading-event';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/ui/table';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Suspense, use } from 'react';

export default function EventsPage({
  params,
}: PageProps<'/[locale]/admin/events'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('admin.events');

  return (
    <>
      <NavHeader title={t('title')}>
        <CreateEvent />
      </NavHeader>

      <section className="space-y-4">
        <div className="relative flex flex-col gap-4 overflow-auto border-b">
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
                <ListEvents />
              </Suspense>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
