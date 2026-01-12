import { NavHeader } from '@/admin/_components/nav-header';
import { CreateEvent } from '@/admin/events/_components/create-event';
import { Table, TableHead, TableHeader, TableRow } from '@/ui/table';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

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

      <section>
        <div className="relative flex flex-col gap-4 overflow-auto border-t">
          <Table>
            <TableHeader className="sticky top-0 z-10">
              <TableRow>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>{t('columns.status')}</TableHead>
                <TableHead>{t('columns.date')}</TableHead>
                <TableHead>{t('columns.visibility')}</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </section>
    </>
  );
}
