import 'server-only';

import { auth } from '@/lib/auth';
import { ActionError } from '@/lib/safe-action';
import { headers } from 'next/headers';
import { cache } from 'react';

export const getSessionOrThrow = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new ActionError('UNAUTHORIZED');
  }

  return session;
});
