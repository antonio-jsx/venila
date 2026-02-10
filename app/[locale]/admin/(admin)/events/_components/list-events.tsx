import { getEvents } from '@/admin/events/query';
import { ButtonTrash } from '@/components/button-trash';
import { EmptyCard } from '@/components/empty-card';
import { Pagination } from '@/components/pagination';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Item, ItemActions, ItemContent } from '@/components/ui/item';
import { parseLocalDate, parseTime, priceRange } from '@/lib/utils';
import { CalendarDaysIcon, ClockIcon } from 'lucide-react';
import { getFormatter, getTranslations } from 'next-intl/server';

export async function ListEvents({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const [t, { data, pagination }, format] = await Promise.all([
    getTranslations('admin.events'),
    getEvents({ search, page }),
    getFormatter(),
  ]);

  if (data.length <= 0) {
    return <EmptyCard title={t('empty_title')} empty={t('empty')} />;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {data.map((event) => (
          <Card
            className="flex flex-row gap-0 overflow-hidden p-0"
            key={event.id}
          >
            <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-accent">
              {format.dateTime(parseLocalDate(event.startDate), {
                day: '2-digit',
                month: 'short',
              })}
            </div>
            <div className="flex flex-1 flex-col gap-2 py-3">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  {priceRange(event.minPrice, event.maxPrice)}
                </CardDescription>
                <CardAction>
                  <Badge variant="secondary">
                    {event.isActive ? 'Active' : 'Hidden'}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <Item>
                  <ItemContent className="flex-row items-center gap-3">
                    <p className="flex items-center gap-1 text-muted-foreground text-sm">
                      <ClockIcon size={16} strokeWidth={1.2} />
                      {parseTime(event.startTime)} <span>-</span>
                      {parseTime(event.endTime)}
                    </p>
                    <p className="flex items-center gap-1 text-muted-foreground text-sm">
                      <CalendarDaysIcon size={16} strokeWidth={1.2} />
                      {format.dateTime(parseLocalDate(event.endDate), {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </ItemContent>
                  <ItemActions>
                    <ButtonTrash title={event.title} id={event.id} />
                  </ItemActions>
                </Item>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <Pagination
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
