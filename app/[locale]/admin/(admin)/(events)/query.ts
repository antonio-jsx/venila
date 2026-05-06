import 'server-only';

import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { tickets } from '@/lib/db/schemas/tickets';
import type { Paginated } from '@/types';
import type { EventWithPriceRange } from '@/types/admin';
import { asc, eq, getTableColumns, sql } from 'drizzle-orm';

export async function getEvents({
  page = 1,
}: {
  page?: number;
}): Promise<Paginated<EventWithPriceRange>> {
  const pageSize = 6;
  const safePage = Math.max(1, Number(page) || 1);
  const offset = (safePage - 1) * pageSize;

  const where = eq(events.isActive, true);

  const { ...eventColumns } = getTableColumns(events);

  return db.transaction(async (tx) => {
    const data = await tx
      .select({
        ...eventColumns,
        minPrice: sql<number>`coalesce(min(${tickets.price}), 0)`,
        maxPrice: sql<number>`coalesce(max(${tickets.price}), 0)`,
        capacity: sql<number>`coalesce(sum(${tickets.quantity}), 0)`,
      })
      .from(events)
      .leftJoin(tickets, eq(tickets.eventId, events.id))
      .where(where)
      .groupBy(events.id)
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
