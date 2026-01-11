'use client';

import type { TicketSchema } from '@/admin/tickets/schema';
import { FormField } from '@/components/form-field';
import type { Day } from '@/types';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';
import { DayShedule } from './day-shedule';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

const Days = {
  L: 'monday',
  M: 'tuesday',
  MI: 'wednesday',
  J: 'thursday',
  V: 'friday',
  S: 'saturday',
  D: 'sunday',
} as const;

export function ToggleDays() {
  const t = useTranslations('days');

  const { control, setValue, getValues } = useFormContext<TicketSchema>();

  const onValueChange = (selected: Day[]) => {
    setValue('days', selected);
    const currentSchedules = getValues('schedules') || {};

    const newSchedules: any = {};

    selected.forEach((key) => {
      newSchedules[key] = currentSchedules[key] || [{ from: '', to: '' }];
    });

    setValue('schedules', newSchedules);
  };

  return (
    <>
      <FormField
        control={control}
        name="days"
        label={t('available')}
        render={(field) => (
          <ToggleGroup
            type="multiple"
            variant="outline"
            spacing={2}
            size="sm"
            value={field.value}
            onValueChange={onValueChange}
          >
            {Object.entries(Days).map(([k, day]) => (
              <ToggleGroupItem value={k} key={k}>
                {t(day)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        )}
      />

      <DayShedule control={control} />
    </>
  );
}
