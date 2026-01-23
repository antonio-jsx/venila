import { envServer } from '@/lib/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './lib/db/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
