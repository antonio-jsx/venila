'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldLabel } from '@/components/ui/field';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { useFormContext } from 'react-hook-form';

export function SelectDate() {
  const t = useTranslations('admin.events.form');

  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const { setValue } = useFormContext();

  const today = new Date(new Date());
  today.setDate(today.getDate() + 1);

  function handleSelect(range: DateRange | undefined) {
    setDateRange(range);

    if (!range?.from) {
      setValue('startDate', undefined, { shouldValidate: true });
      setValue('endDate', undefined, { shouldValidate: true });
      return;
    }

    setValue('startDate', range.from.toISOString().split('T')[0], {
      shouldValidate: true,
    });

    setValue('endDate', range.to?.toISOString().split('T')[0] ?? undefined, {
      shouldValidate: true,
    });
  }

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="date-picker-range">{t('date')}</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-card" variant="outline">
            <CalendarIcon />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, 'LLL dd, y')} -{' '}
                  {format(dateRange.to, 'LLL dd, y')}
                </>
              ) : (
                format(dateRange.from, 'LLL dd, y')
              )
            ) : (
              <span>{t('pickDate')}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-auto p-0 [--spacing:0.20rem]"
        >
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={handleSelect}
            disabled={{ before: today }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
