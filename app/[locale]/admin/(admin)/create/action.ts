'use server';

import { eventSchema } from '@/admin/create/schema';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { adminClient } from '@/lib/safe-action';
import { generateSlug } from '@/lib/utils';
import { refresh } from 'next/cache';

export const addEvent = adminClient
  .metadata({ name: 'add-event' })
  .inputSchema(eventSchema)
  .action(async ({ parsedInput }) => {
    await db
      .insert(events)
      .values({ slug: generateSlug(parsedInput.title), ...parsedInput });
    refresh();
  });
