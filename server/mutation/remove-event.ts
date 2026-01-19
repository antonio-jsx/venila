'use server';

import { isAdminMiddleware } from '@/lib/auth-middleware';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { actionClient } from '@/lib/safe-action';
import { eq } from 'drizzle-orm';
import { refresh } from 'next/cache';
import z from 'zod';

const remove = z.object({ id: z.number().min(1, '') });

export const removeEvent = actionClient
  .use(isAdminMiddleware)
  .metadata({ name: 'remove-event' })
  .inputSchema(remove)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(events).where(eq(events.id, id));
    refresh();
  });

export type InferRemoveEvent = typeof removeEvent;
