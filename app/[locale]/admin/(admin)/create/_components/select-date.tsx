'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field } from '@/components/ui/field';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, parseISO } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SelectDateProps {
  value: string;
  onChange?: (date: string) => void;
  placeholder?: string;
}

export function SelectDate({ value, onChange }: SelectDateProps) {
  const t = useTranslations('admin.events.form');

  const date = value ? parseISO(value) : undefined;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Field className="w-fit">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="justify-start border-input bg-card"
            variant="outline"
          >
            <CalendarIcon />
            {date ? format(date, 'LLL dd, y') : <span>{t('pickDate')}</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-auto p-0 [--spacing:0.20rem]"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              if (!selectedDate) return;
              onChange?.(format(selectedDate, 'yyyy-MM-dd'));
            }}
            disabled={{ before: tomorrow }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
