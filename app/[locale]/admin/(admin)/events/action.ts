'use server';

import { eventSchema } from '@/admin/events/schema';
import { requirePermission } from '@/lib/auth-middleware';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { actionClient } from '@/lib/safe-action';
import { generateSlug } from '@/lib/utils';
import { eq } from 'drizzle-orm';
import { refresh } from 'next/cache';
import * as z from 'zod/v4';

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
    await db
      .insert(events)
      .values({ slug: generateSlug(parsedInput.title), ...parsedInput });
    refresh();
  });

const remove = z.object({ id: z.number().min(1, '') });

export const removeEvent = actionClient
  .use(
    requirePermission({
      role: 'admin',
      permissions: {
        events: ['delete'],
      },
    })
  )
  .metadata({ name: 'remove-event' })
  .inputSchema(remove)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(events).where(eq(events.id, id));
    refresh();
  });

export type InferRemoveEvent = typeof removeEvent;
