'use server';

import { mpSchema } from '@/admin/settings/schema';
import { db } from '@/lib/db';
import { mercadoPago } from '@/lib/db/schemas/mercadopago';
import { actionClient } from '@/lib/safe-action';

export const addMercadoPago = actionClient
  .metadata({ name: 'add-mercado-pago' })
  .inputSchema(mpSchema)
  .action(async ({ parsedInput }) => {
    await db.insert(mercadoPago).values({ ...parsedInput });
  });
