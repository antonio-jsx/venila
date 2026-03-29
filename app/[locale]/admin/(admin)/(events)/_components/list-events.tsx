import { getEvents } from '@/admin/(events)/query';
import { ButtonTrash } from '@/components/button-trash';
import { EmptyCard } from '@/components/empty-card';
import { Pagination } from '@/components/pagination';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Item, ItemContent } from '@/components/ui/item';
import { parseLocalDate, parseTime, priceRange } from '@/lib/utils';
import { DateDisplay } from './date-display';
import { CalendarDaysIcon, ClockIcon } from 'lucide-react';
import { getFormatter, getTranslations } from 'next-intl/server';

export async function ListEvents({ page }: { page: number }) {
  const [t, { data, pagination }, format] = await Promise.all([
    getTranslations('admin.events'),
    getEvents({ page }),
    getFormatter(),
  ]);

  if (data.length <= 0) {
    return <EmptyCard title={t('empty_title')} empty={t('empty')} />;
  }

  return (
    <>
      <div className="mx-auto flex max-w-xl flex-col gap-4">
        {data.map((event) => (
          <Card
            className="group flex w-full flex-row gap-0 p-0 shadow-none transition-all duration-200 hover:border-primary/30 dark:hover:border-ring/30"
            key={event.id}
          >
            <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r-2 border-dashed group-hover:border-primary/30 dark:group-hover:border-ring/30">
              <DateDisplay date={event.startDate} />
              <div className="absolute -right-2.5 -bottom-px h-2.5 w-5 rounded-t-xl border border-b-0 bg-background transition-colors group-hover:border-primary/30 dark:bg-background dark:group-hover:border-ring/30"></div>
              <div className="absolute -top-px -right-2.5 z-50 h-2.5 w-5 rounded-b-full border border-t-0 bg-background transition-colors group-hover:border-primary/30 dark:bg-background dark:group-hover:border-ring/30"></div>
            </div>
            <div className="flex flex-1 flex-col gap-2 py-4 pr-4 pl-5">
              <CardHeader className="p-0">
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="font-mono text-green-600">
                  {priceRange(event.minPrice, event.maxPrice)}
                </CardDescription>
                <CardAction>
                  <ButtonTrash title={event.title} id={event.id} />
                </CardAction>
              </CardHeader>
              <CardContent className="p-0">
                <Item>
                  <ItemContent className="flex-row gap-2">
                    <p className="flex items-center gap-0.5 font-mono text-muted-foreground text-sm">
                      <ClockIcon size={16} strokeWidth={1.2} />
                      {parseTime(event.startTime)} <span>-</span>
                      {parseTime(event.endTime)}
                    </p>
                    <p className="flex items-center gap-0.5 font-mono text-muted-foreground text-sm">
                      <CalendarDaysIcon size={16} strokeWidth={1.2} />
                      {format.dateTime(parseLocalDate(event.endDate), {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </ItemContent>
                </Item>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <Pagination path="/admin" pages={pagination.totalPages} />
    </>
  );
}
