import { requiredString } from '@/lib/utils';
import * as z from 'zod/v4';

const ticketSchama = z.object({
  title: requiredString('title is required'),
  price: z.number().min(1, 'Price is required'),
  quantity: z.number().min(1, 'Quantity is required'),
});

export const eventSchema = z
  .object({
    title: requiredString('Title is required'),
    short: requiredString('Short description is required').max(
      120,
      'Short description must be less than 100 characters'
    ),
    description: z.string().optional(),
    address: z.string().optional(),
    startDate: z.iso
      .date('Invalid date format')
      .trim()
      .min(1, 'Start date is required'),
    endDate: z.iso
      .date('Invalid date format')
      .trim()
      .min(1, 'End date is required'),
    startTime: z.iso
      .time('Invalid time format')
      .trim()
      .min(1, 'Start time is required'),
    endTime: z.iso
      .time('Invalid time format')
      .trim()
      .min(1, 'End time is required'),
    tickets: z.array(ticketSchama).min(1, 'At least one ticket is required'),
  })
  .superRefine((data, ctx) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);

    if (end < start) {
      ctx.addIssue({
        path: ['endDate'],
        message: 'End date must be greater than start date',
        code: 'custom',
      });
    }
  });

export type EventSchema = z.infer<typeof eventSchema>;
export type TicketSchema = z.infer<typeof ticketSchama>;

export const eventDefaults = {
  title: '',
  short: '',
  description: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  address: '',
  tickets: [
    {
      title: '',
      price: 0,
      quantity: 0,
    },
  ],
} satisfies EventSchema;
