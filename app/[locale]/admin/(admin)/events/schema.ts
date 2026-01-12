import { requiredString } from '@/lib/utils';
import z from 'zod/v4';

export const eventSchema = z
  .object({
    title: requiredString('Title is required'),
    description: z.string().optional(),
    address: requiredString('Address is required'),
    startDate: z.iso
      .date('Invalid date format')
      .trim()
      .min(1, 'Start date is required'),
    endDate: z.iso
      .date('Invalid date format')
      .trim()
      .min(1, 'End date is required'),
  })
  .superRefine((data, ctx) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);

    if (end <= start) {
      ctx.addIssue({
        path: ['endDate'],
        message: 'End date must be greater than start date',
        code: 'custom',
      });
    }
  });

export type EventSchema = z.infer<typeof eventSchema>;
