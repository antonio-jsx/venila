import 'server-only';

import { db } from '@/lib/db';
import { cache } from 'react';

export const getEventById = cache(async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.query.events.findFirst({
    where: (events, { eq }) => eq(events.id, id),
    with: {
      tickets: true,
    },
  });
});
