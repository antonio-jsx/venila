import * as users from '@/lib/db/schemas/users';
import { envServer } from '@/lib/env/server';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const client = postgres(envServer.DATABASE_URL);
export const db = drizzle(client, { schema: { ...users } });
