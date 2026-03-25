'use client';

import { SelectDate } from '@/admin/create/_components/select-date';
import type { EventSchema } from '@/admin/create/schema';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

function Label({ error, text }: { error: boolean; text: string }) {
  return (
    <p className={cn('mb-1 text-sm', error && 'text-destructive')}>{text}</p>
  );
}

export function Scheduler() {
  const t = useTranslations('admin.events.form');
  const { control, formState } = useFormContext<EventSchema>();

  const {
    errors: { startDate, startTime, endDate, endTime },
  } = formState;

  const startError = !!(startDate || startTime);
  const endError = !!(endDate || endTime);

  return (
    <div className="flex items-start gap-4 space-y-1.5 [--spacing:0.25rem]">
      <div>
        <Label error={startError} text={t('start')} />
        <div className="flex items-start gap-1">
          <FormField
            control={control}
            name="startDate"
            render={(field) => (
              <SelectDate value={field.value} onChange={field.onChange} />
            )}
          />
          <FormField
            control={control}
            name="startTime"
            render={(field) => <Input type="time" step={1800} {...field} />}
          />
        </div>
      </div>

      <div>
        <Label error={endError} text={t('end')} />
        <div className="flex items-start gap-1">
          <FormField
            control={control}
            name="endDate"
            render={(field) => (
              <SelectDate value={field.value} onChange={field.onChange} />
            )}
          />
          <FormField
            control={control}
            name="endTime"
            render={(field) => <Input type="time" step={1800} {...field} />}
          />
        </div>
      </div>
    </div>
  );
}
