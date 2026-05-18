import { DateDisplay } from '@/admin/(events)/_components/date-display';
import { Separator } from '@/components/ui/separator';
import { parseLocalDate, parseTime, priceRange } from '@/lib/utils';
import type { EventWithPriceRange } from '@/types/admin';
import { Options } from './options';
import { CalendarDaysIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { getFormatter } from 'next-intl/server';

export async function Event({ value }: { value: EventWithPriceRange }) {
  const format = await getFormatter();
  const startDate = value.startDate;
  const price = priceRange(value.minPrice, value.maxPrice);
  const startTime = parseTime(value.startTime);
  const endTime = parseTime(value.endTime);
  const date = format.dateTime(parseLocalDate(value.endDate), {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group flex flex-row gap-0 overflow-visible rounded-3xl border bg-card hover:border-primary/30 dark:hover:border-neutral-500/30">
      <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r-2 border-dashed group-hover:border-primary/30 dark:group-hover:border-neutral-500/30">
        <DateDisplay date={startDate} />
        <div className="absolute -right-2.5 -bottom-px h-2.5 w-5 rounded-t-xl border border-b-0 bg-background group-hover:border-primary/30 dark:group-hover:border-neutral-500/30"></div>
        <div className="absolute -top-px -right-2.5 z-50 h-2.5 w-5 rounded-b-full border border-t-0 bg-background group-hover:border-primary/30 dark:group-hover:border-neutral-500/30"></div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-4">
        <div className="flex items-center gap-2">
          <p className="leading-tight">{value.title}</p>

          <p className="ml-auto flex items-center gap-0.5 rounded-3xl border px-2 py-1 font-mono text-muted-foreground text-xs">
            <ClockIcon size={16} strokeWidth={1.2} />
            {startTime} <span>-</span> {endTime}
          </p>
          {startDate !== value.endDate && (
            <>
              <Separator className="my-auto h-4" orientation="vertical" />
              <p className="flex items-center gap-0.5 rounded-3xl border px-2 py-1 font-mono text-muted-foreground text-xs">
                <CalendarDaysIcon size={16} strokeWidth={1.2} />
                {date}
              </p>
            </>
          )}
          <Separator className="my-auto h-4" orientation="vertical" />
          <p className="flex items-center gap-0.5 rounded-3xl border px-2 py-1 font-mono text-muted-foreground text-xs">
            <UsersIcon size={16} strokeWidth={1.2} /> 0/{value.capacity}
          </p>

          <Options id={value.id} title={value.title} />
        </div>

        <p className="font-mono text-muted-foreground">{price}</p>
      </div>
    </div>
  );
}
