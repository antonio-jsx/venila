import { getEvents } from '@/admin/events/query';
import { ButtonTrash } from '@/components/button-trash';
import { EmptyTable } from '@/components/empty-table';
import { Pagination } from '@/components/pagination';
import { Badge } from '@/components/ui/badge';
import { TableCell, TableRow } from '@/components/ui/table';
import { priceRange } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';

export async function ListEvents({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const [t, { data, pagination }] = await Promise.all([
    getTranslations('admin.events'),
    getEvents({ search, page }),
  ]);

  if (data.length <= 0) {
    return <EmptyTable title={t('empty_title')} empty={t('empty')} cols={6} />;
  }

  return (
    <>
      {data.map((event) => (
        <TableRow key={event.id}>
          <TableCell className="font-medium">{event.title}</TableCell>
          <TableCell>
            <Badge variant="outline">{event.startDate}</Badge>
            <Badge
              variant="secondary"
              className="ml-1 bg-indigo-100 text-indigo-900 dark:bg-indigo-400"
            >
              {event.endDate}
            </Badge>
          </TableCell>
          <TableCell className="font-medium">{event.capacity}</TableCell>
          <TableCell className="font-bold">
            {priceRange(event.minPrice, event.maxPrice)}
          </TableCell>
          <TableCell>
            <Badge variant="secondary">
              {event.isActive ? 'Active' : 'Hidden'}
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <ButtonTrash title={event.title} id={event.id} />
          </TableCell>
        </TableRow>
      ))}

      <Pagination
        cols={6}
        path="/admin/events"
        show={t('page', {
          from: pagination.from,
          to: pagination.to,
          total: pagination.total,
        })}
        pages={pagination.totalPages}
      />
    </>
  );
}
