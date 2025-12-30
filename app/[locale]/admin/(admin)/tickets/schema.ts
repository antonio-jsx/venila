import z from 'zod/v4';

export const ticketSchema = z.object({
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  price: z.string(),
  quantity: z.string(),
  event: z.string(),
  active: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  isActive: z.boolean(),
});

export type TicketSchema = z.infer<typeof ticketSchema>;
