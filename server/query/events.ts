import 'server-only';

import { db } from '@/lib/db';
import { events, type SelectEvents } from '@/lib/db/schemas/events';
import type { Paginated } from '@/types';
import { asc, sql } from 'drizzle-orm';

export async function getEvents(
  page: number = 1
): Promise<Paginated<SelectEvents>> {
  const pageSize = 8;
  const offset = (page - 1) * pageSize;

  return db.transaction(async (tx) => {
    const data = await tx
      .select()
      .from(events)
      .orderBy(asc(events.id))
      .limit(pageSize)
      .offset(offset);

    const [{ count }] = await tx
      .select({ count: sql<number>`count(*)` })
      .from(events);

    return {
      data,
      pagination: {
        total: count,
        totalPages: Math.ceil(count / pageSize),
        from: (page - 1) * pageSize + 1,
        to: Math.min(page * pageSize, count),
      },
    };
  });
}
