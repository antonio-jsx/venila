import 'server-only';

import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import type { Paginated } from '@/types';
import type { EventWithPriceRange } from '@/types/admin';
import { and, asc, eq, getTableColumns, ilike, sql } from 'drizzle-orm';

export async function getEvents({
  page = 1,
  search,
}: {
  search?: string;
  page?: number;
}): Promise<Paginated<EventWithPriceRange>> {
  const pageSize = 2;
  const safePage = Math.max(1, Number(page) || 1);
  const offset = (safePage - 1) * pageSize;

  const where = and(
    eq(events.isActive, true),
    search ? ilike(events.title, `%${search}%`) : undefined
  );

  return db.transaction(async (tx) => {
    const { tickets, ...eventColumns } = getTableColumns(events);

    const data = await tx
      .select({
        ...eventColumns,
        minPrice: sql<number | null>`min((ticket->>'price')::int)`,
        maxPrice: sql<number | null>`max((ticket->>'price')::int)`,
        capacity: sql<number | null>`sum((ticket->>'quantity')::int)`,
      })
      .from(events)
      .leftJoin(sql`jsonb_array_elements(${tickets}) as ticket`, sql`true`)
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
