import { requiredString } from '@/lib/utils';
import z from 'zod/v4';

export const eventSchema = z.object({
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
});

export type EventSchema = z.infer<typeof eventSchema>;
