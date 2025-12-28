import { NavHeader } from '@/admin/_components/nav-header';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function OdersPage({
  params,
}: PageProps<'/[locale]/admin/orders'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('admin.orders');

  return (
    <>
      <NavHeader title={t('title')} />

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>{t('columns.order')}</TableHead>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>Ticket</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>{t('columns.payment')}</TableHead>
                <TableHead>{t('columns.date')}</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
