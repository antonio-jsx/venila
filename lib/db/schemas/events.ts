import { tickets } from '@/lib/db/schemas/tickets';
import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  pgTable,
  text,
  time,
  varchar,
} from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 60 }).notNull(),
  startDate: date().notNull(),
  endDate: date().notNull(),
  startTime: time().notNull(),
  endTime: time().notNull(),
  description: text().notNull(),
  address: text(),
  theme: text(),
  slug: text().notNull(),
  isActive: boolean().notNull().default(true),
});

export const eventsRelations = relations(events, ({ many }) => ({
  tickets: many(tickets),
}));

export type SelectEvents = typeof events.$inferSelect;
