import { parseLocalDate } from '@/lib/utils';
import { getFormatter } from 'next-intl/server';
import { use } from 'react';

export function DateDisplay({ date }: { date: string }) {
  const format = use(getFormatter());
  const dateObj = parseLocalDate(date);

  const day = format.dateTime(dateObj, { day: '2-digit' });
  const month = format.dateTime(dateObj, { month: 'short' });

  return (
    <p className="text-center font-mono text-muted-foreground text-xs uppercase">
      <span className="block font-bold text-2xl text-foreground">{day}</span>
      {month}
    </p>
  );
}
