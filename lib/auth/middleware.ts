import 'server-only';

import { auth } from '@/lib/auth';
import { ActionError } from '@/lib/safe-action';
import type { PermissionConfig } from '@/types/admin';
import { headers } from 'next/headers';
import { createMiddleware } from 'next-safe-action';
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

export const isAdminMiddleware = createMiddleware().define(async ({ next }) => {
  const session = await getSessionOrThrow();

  if (session.user.role !== 'admin') {
    throw new ActionError('FORBIDDEN');
  }

  return next({ ctx: { user: session.user.id } });
});

export const requirePermission = (config: PermissionConfig) =>
  createMiddleware().define(async ({ next }) => {
    const result = await auth.api.userHasPermission({
      headers: await headers(),
      body: {
        role: config.role,
        permissions: config.permissions,
      },
    });

    if (!result?.success) {
      throw new ActionError('FORBIDDEN');
    }

    return next();
  });
