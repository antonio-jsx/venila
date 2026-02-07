import { NavTitle } from '@/admin/_components/nav-title';
import { ListEvents } from '@/admin/events/_components/list-events';
import { Search } from '@/admin/events/_components/search';
import { removeEvent } from '@/admin/events/action';
import { Remove } from '@/components/remove';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { loadSearchParams } from '@/lib/searchParams';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export default async function EventsPage({
  params,
  searchParams,
}: PageProps<'/[locale]/admin/events'>) {
  const { locale } = (await params) as { locale: Locale };
  const tPromise = getTranslations({ locale, namespace: 'admin.events' });
  const searchPromise = loadSearchParams(searchParams);
  const [t, { q, page }] = await Promise.all([tPromise, searchPromise]);

  return (
    <>
      <NavTitle text={t('title')} subtitle={t('subtitle')}>
        <Search />
      </NavTitle>

      <section className="space-y-4">
        <div className="relative flex flex-col gap-4 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>{t('columns.capacity')}</TableHead>
                <TableHead>{t('columns.price')}</TableHead>
                <TableHead>{t('columns.status')}</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ListEvents search={q} page={page} />
            </TableBody>
          </Table>
        </div>
      </section>

      <Remove action={removeEvent} />
    </>
  );
}
