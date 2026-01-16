import { EmptyEvents } from '@/admin/events/_components//empty';
import { PaginationEvents } from '@/admin/events/_components/pagination';
import { getEvents } from '@/server/query/events';
import { Badge } from '@/ui/badge';
import { TableCell, TableRow } from '@/ui/table';
import { getTranslations } from 'next-intl/server';

export async function ListEvents({ search }: { search: string }) {
  const t = await getTranslations('admin.events');
  const { data, pagination } = await getEvents({ search });

  if (data.length <= 0) {
    return <EmptyEvents title={t('empty_title')} empty={t('empty')} />;
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
              className="bg-indigo-100 dark:bg-indigo-400"
            >
              {event.endDate}
            </Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">
              {event.isActive ? 'Active' : 'Hidden'}
            </Badge>
          </TableCell>
        </TableRow>
      ))}

      <PaginationEvents
        show={t('page', {
          from: pagination.from,
          to: pagination.to,
          total: pagination.total,
        })}
      />
    </>
  );
}
