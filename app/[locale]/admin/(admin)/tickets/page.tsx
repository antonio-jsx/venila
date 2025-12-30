import { NavHeader } from '@/admin/_components/nav-header';
import { CreateTicket } from '@/admin/tickets/_components/create_ticket';
import { Table, TableHead, TableHeader, TableRow } from '@/ui/table';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function TicketsPage({
  params,
}: PageProps<'/[locale]/admin/tickets'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('admin.tickets');

  return (
    <>
      <NavHeader title={t('title')}>
        <CreateTicket />
      </NavHeader>

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>{t('columns.price')}</TableHead>
                <TableHead>{t('columns.quantity')}</TableHead>
                <TableHead>{t('columns.status')}</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
