import 'server-only';

import { db } from '@/lib/db';
import { cache } from 'react';

export const getEventById = cache(async (id: number) => {
  return db.query.events.findFirst({
    where: (events, { eq }) => eq(events.id, id),
    with: {
      tickets: true,
    },
  });
});
