'use client';

import { SelectDate } from '@/admin/create/_components/select-date';
import type { EventSchema } from '@/admin/create/schema';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

export function Scheduler() {
  const t = useTranslations('admin.events.form');
  const { control } = useFormContext<EventSchema>();

  return (
    <div className="flex items-start gap-4 space-y-1.5 [--spacing:0.25rem]">
      <div>
        <p className="font-medium text-muted-foreground text-sm">
          {t('start')}
        </p>
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
        <p className="font-medium text-muted-foreground text-sm">{t('end')}</p>
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
