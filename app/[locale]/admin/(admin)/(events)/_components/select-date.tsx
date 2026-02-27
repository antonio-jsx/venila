'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldLabel } from '@/components/ui/field';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, isSameDay, parse } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { DateRange } from 'react-day-picker';
import { useFormContext } from 'react-hook-form';

export function SelectDate() {
  const t = useTranslations('admin.events.form');
  const { setValue, watch } = useFormContext();

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const dateRange: DateRange | undefined = startDate
    ? {
        from: parse(startDate, 'yyyy-MM-dd', new Date()),
        to: endDate
          ? parse(endDate, 'yyyy-MM-dd', new Date())
          : parse(startDate, 'yyyy-MM-dd', new Date()),
      }
    : undefined;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  function handleSelect(range: DateRange | undefined) {
    if (!range?.from) {
      setValue('startDate', undefined, { shouldValidate: true });
      setValue('endDate', undefined, { shouldValidate: true });
      return;
    }

    setValue('startDate', format(range.from, 'yyyy-MM-dd'), {
      shouldValidate: true,
    });

    setValue('endDate', format(range.to ?? range.from, 'yyyy-MM-dd'), {
      shouldValidate: true,
    });
  }

  const isSingleDay =
    dateRange?.from && dateRange?.to && isSameDay(dateRange.from, dateRange.to);

  return (
    <Field className="w-fit">
      <FieldLabel>{t('date')}</FieldLabel>

      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-card" variant="outline">
            <CalendarIcon />

            {dateRange?.from ? (
              isSingleDay ? (
                format(dateRange.from, 'LLL dd, y')
              ) : (
                <>
                  {format(dateRange.from, 'LLL dd, y')} -{' '}
                  {format(dateRange.to!, 'LLL dd, y')}
                </>
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
            disabled={{ before: tomorrow }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
