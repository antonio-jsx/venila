import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const mercadoPago = pgTable('mercadopago', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  publicKey: text('public-key').notNull().unique(),
  accessToken: text('access-token').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type SelectMercadoPago = typeof mercadoPago.$inferSelect;
