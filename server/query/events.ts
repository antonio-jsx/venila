import 'server-only';

import { db } from '@/lib/db';
import { events, type SelectEvents } from '@/lib/db/schemas/events';
import type { Paginated } from '@/types';
import { asc, ilike, sql } from 'drizzle-orm';

export async function getEvents({
  page = 1,
  search,
}: {
  search?: string;
  page?: number;
}): Promise<Paginated<SelectEvents>> {
  const pageSize = 2;
  const safePage = Math.max(1, Number(page) || 1);
  const offset = (safePage - 1) * pageSize;

  const where = search ? ilike(events.title, `%${search}%`) : undefined;

  return db.transaction(async (tx) => {
    const data = await tx
      .select()
      .from(events)
      .where(where)
      .orderBy(asc(events.id))
      .limit(pageSize)
      .offset(offset);

    const [{ count }] = await tx
      .select({ count: sql<number>`count(*)` })
      .from(events)
      .where(where);

    return {
      data,
      pagination: {
        total: count,
        totalPages: Math.ceil(count / pageSize),
        from: count === 0 ? 0 : offset + 1,
        to: Math.min(page * pageSize, count),
      },
    };
  });
}
