import z from 'zod/v4';

export const eventSchema = z.object({
  title: z.string(),
  cover: z.string(),
  description: z.string(),
  start_date: z.string(),
  start_time: z.string(),
  end_date: z.string(),
  end_time: z.string(),
  venue: z.string(),
  address: z.string(),
  isActive: z.boolean(),
});

export type EventSchema = z.infer<typeof eventSchema>;
