import { envServer } from '@/lib/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './lib/db/drizzle',
  schema: './lib/db/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.DATABASE_URL,
  },
});
