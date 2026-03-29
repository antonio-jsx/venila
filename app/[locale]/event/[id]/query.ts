import 'server-only';

import { db } from '@/lib/db';
import { events, type SelectEvents } from '@/lib/db/schemas/events';
import { eq } from 'drizzle-orm';
import { cache } from 'react';

export const getEventById = cache(
  async (id: number): Promise<SelectEvents | null> => {
    const result = await db
      .select()
      .from(events)
      .where(eq(events.id, id))
      .limit(1);

    return result[0] ?? null;
  }
);
