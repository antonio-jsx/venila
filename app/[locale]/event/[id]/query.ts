import 'server-only';

import { db } from '@/lib/db';
import { events } from '@/lib/db/schemas/events';
import { eq } from 'drizzle-orm';
import { cache } from 'react';

export const getEventById = cache(async (id: string) => {
  const result = await db
    .select()
    .from(events)
    .where(eq(events.id, Number.parseInt(id, 10)))
    .limit(1);

  return result[0];
});
