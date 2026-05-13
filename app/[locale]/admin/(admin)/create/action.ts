'use server';

import { eventSchema } from '@/admin/create/schema';
import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { tickets as ticketsDb } from '@/lib/db/schemas/tickets';
import { adminClient } from '@/lib/safe-action';
import { generateSlug } from '@/lib/utils';
import { refresh } from 'next/cache';
import * as z from 'zod/v4';

export const addEvent = adminClient
  .metadata({ name: 'add-event' })
  .inputSchema(eventSchema)
  .action(async ({ parsedInput }) => {
    const { tickets, ...restData } = parsedInput;
    await db.transaction(async (tx) => {
      const [event] = await tx
        .insert(events)
        .values({ slug: generateSlug(restData.title), ...restData })
        .returning();

      await tx.insert(ticketsDb).values(
        tickets.map((ticket) => ({
          ...ticket,
          eventId: event.id,
          price: ticket.price.toString(),
        }))
      );
    });
    refresh();
  });

export const updateEvent = adminClient
  .metadata({ name: 'update-event' })
  .bindArgsSchemas<[id: z.ZodNumber]>([z.number()])
  .inputSchema(eventSchema)
  .action(async ({ parsedInput }) => {});
