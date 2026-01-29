import type { TicketSchema } from '@/admin/events/schema';
import {
  boolean,
  date,
  integer,
  jsonb,
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
  description: text(),
  address: text(),
  tickets: jsonb().$type<TicketSchema[]>(),
  isActive: boolean().notNull().default(true),
});

export type SelectEvents = typeof events.$inferSelect;
