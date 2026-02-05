import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { combineDateAndTime } from '@/lib/utils';
import { CalendarIcon, ClockCheckIcon } from 'lucide-react';
import { getFormatter, getTranslations } from 'next-intl/server';

const configTime = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export async function ItemDate({
  date,
  time,
  variant,
}: {
  variant: 'calendar' | 'clock';
  date: string;
  time: string;
}) {
  const t = await getTranslations('event');
  const format = await getFormatter();
  const dateTime = format.dateTime(combineDateAndTime(date, time), configTime);

  return (
    <Item>
      <ItemMedia variant="icon">
        {variant === 'clock' ? <ClockCheckIcon /> : <CalendarIcon />}
      </ItemMedia>
      <ItemContent>
        <ItemDescription>
          {t(variant === 'clock' ? 'end' : 'start')}
        </ItemDescription>
        <ItemTitle>{dateTime}</ItemTitle>
      </ItemContent>
    </Item>
  );
}
