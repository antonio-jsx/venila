import { NavTitle } from '@/admin/_components/nav-title';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Metadata } from 'next';
import { locale as rootLocale } from 'next/root-params';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await rootLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'admin.orders' });
  return { title: t('title') };
}

export default async function OdersPage() {
  setRequestLocale((await rootLocale()) as Locale);
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
