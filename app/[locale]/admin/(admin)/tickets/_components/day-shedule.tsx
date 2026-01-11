/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no key> */
/** biome-ignore-all lint/suspicious/noExplicitAny: <no any> */
'use client';

import type { TicketSchema } from '@/admin/tickets/schema';
import { FormField } from '@/components/form-field';
import { Input } from '@/ui/input';
import { type Control, useWatch } from 'react-hook-form';

export function DayShedule({ control }: { control: Control<TicketSchema> }) {
  const schedules = useWatch({ control, name: 'schedules' });

  if (!schedules) return null;

  return Object.entries(schedules).map(([day, slots]) => (
    <div className="flex items-start gap-4" key={day}>
      {day}
      {slots.map((_, index) => (
        <div className="flex items-center gap-4" key={`${day}-${index}`}>
          <FormField
            control={control}
            name={`schedules.${day}.${index}.from` as any}
            render={(field) => <Input type="time" {...field} />}
          />

          <FormField
            control={control}
            name={`schedules.${day}.${index}.to` as any}
            render={(field) => <Input type="time" {...field} />}
          />
        </div>
      ))}
    </div>
  ));
}
