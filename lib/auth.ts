import { db } from '@/lib/db';
import { envClient } from '@/lib/env/client';
import { ac, admin, moderador } from './permissions';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { admin as adminPlugin } from 'better-auth/plugins';

export const auth = betterAuth({
  baseURL: envClient.NEXT_PUBLIC_APP_URL,
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
