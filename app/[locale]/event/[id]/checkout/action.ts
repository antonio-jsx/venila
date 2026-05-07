'use server';

import { checkoutSchema } from '@/app/event/[id]/checkout/schema';
import { actionClient } from '@/lib/safe-action';

export const checkoutAction = actionClient
  .metadata({ name: 'checkout' })
  .inputSchema(checkoutSchema)
  .action(async (input) => {});
