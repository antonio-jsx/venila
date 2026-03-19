import { ac, admin, moderador } from '@/lib/auth/permissions';
import { db } from '@/lib/db';
import { envClient } from '@/lib/env/client';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { admin as adminPlugin } from 'better-auth/plugins';

export const auth = betterAuth({
  baseURL: { allowedHosts: [envClient.NEXT_PUBLIC_APP_URL, 'localhost:*'] },
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  plugins: [adminPlugin({ ac, roles: { admin, moderador } }), nextCookies()],
});
