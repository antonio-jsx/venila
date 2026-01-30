'use server';

import { eventSchema } from '@/admin/events/schema';
import { requirePermission } from '@/lib/auth-middleware';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { actionClient } from '@/lib/safe-action';
import { refresh } from 'next/cache';

export const addEvent = actionClient
  .use(
    requirePermission({
      role: 'admin',
      permissions: {
        events: ['create'],
      },
    })
  )
  .metadata({ name: 'add-event' })
  .inputSchema(eventSchema)
  .action(async ({ parsedInput }) => {
    await db.insert(events).values(parsedInput);
    refresh();
  });
