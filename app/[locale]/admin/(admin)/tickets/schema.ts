import { requiredString } from '@/lib/utils';
import { DAYS } from '@/types';
import z from 'zod/v4';

export const ticketSchema = z.object({
  name: requiredString('Title is required'),
  days: z
    .array(z.enum(DAYS))
    .min(1, 'Select days')
    .refine(
      (days) => new Set(days).size === days.length,
      'Duplicate days are not allowed'
    ),
  schedules: z.record(
    z.enum(DAYS),
    z.array(z.object({ from: z.iso.time(), to: z.iso.time() }))
  ),
  price: z.number().min(1, 'Price is required'),
  quantity: z.number().min(1, 'Quantity is required'),
  event: z.number().min(1, 'Event is required'),
});

export type TicketSchema = z.infer<typeof ticketSchema>;
