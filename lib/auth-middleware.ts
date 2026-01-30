import 'server-only';

import { auth } from '@/lib/auth';
import { redirect } from '@/lib/i18n/navigation';
import { ActionError } from '@/lib/safe-action';
import type { PermissionConfig } from '@/types/admin';
import { headers } from 'next/headers';
import { getLocale } from 'next-intl/server';
import { createMiddleware } from 'next-safe-action';
import { cache } from 'react';

export const requireAdmin = cache(async () => {
  const locale = await getLocale();

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect({ href: '/admin/signin', locale });
  }

  return !!session && session.user.role === 'admin';
});

export const isAdminMiddleware = createMiddleware().define(async ({ next }) => {
  const isAdmin = await requireAdmin();
  if (!isAdmin) {
    throw new ActionError('Unauthorized user');
  }
  return next();
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
