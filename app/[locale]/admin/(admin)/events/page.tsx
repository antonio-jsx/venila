import { NavTitle } from '@/admin/_components/nav-title';
import { CreateLink } from '@/admin/events/_components/create-link';
import { ListEvents } from '@/admin/events/_components/list-events';
import { Search } from '@/admin/events/_components/search';
import { Remove } from '@/components/remove';
import { loadSearchParams } from '@/lib/searchParams';
import { removeEvent } from '@/server/mutation/remove-event';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/ui/table';
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
        <CreateLink />
      </NavTitle>

      <section className="space-y-4">
        <div className="relative flex flex-col gap-4 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('columns.event')}</TableHead>
                <TableHead>{t('columns.date')}</TableHead>
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
