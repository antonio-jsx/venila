import { events } from '@/lib/db/schemas/events';
import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  numeric,
  pgTable,
  varchar,
} from 'drizzle-orm/pg-core';

export const tickets = pgTable('tickets', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  eventId: integer()
    .notNull()
    .references(() => events.id, { onDelete: 'cascade' }),
  title: varchar({ length: 100 }).notNull(),
  price: numeric({ precision: 10, scale: 2 }).notNull(),
  quantity: integer().notNull(),
  setmax: boolean().notNull().default(false),
  max: integer().notNull().default(0),
  sold: integer().notNull().default(0),
});

export const ticketsRelations = relations(tickets, ({ one }) => ({
  event: one(events, {
    fields: [tickets.eventId],
    references: [events.id],
  }),
}));

export type SelectTickets = typeof tickets.$inferSelect;
