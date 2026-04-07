import { NavTitle } from '@/admin/_components/nav-title';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('admin.orders');
  return { title: t('title') };
}

export default async function OdersPage() {
  const t = await getTranslations('admin.orders');

  return (
    <>
      <NavTitle text={t('title')} />

      <Table>
        <TableHeader>
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
    </>
  );
}
