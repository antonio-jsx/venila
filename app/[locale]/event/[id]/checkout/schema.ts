import { requiredString } from '@/lib/utils';
import * as z from 'zod/v4';

export const checkoutSchema = z.object({
  items: z.array(
    z.object({
      ticketHash: z.number(),
      quantity: z.number(),
    })
  ),
  name: requiredString('Name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
