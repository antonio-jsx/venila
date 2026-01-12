import {
  boolean,
  date,
  integer,
  pgTable,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 60 }).notNull(),
  startDate: date().notNull(),
  endDate: date().notNull(),
  description: text(),
  address: text().notNull(),
  isActive: boolean().notNull().default(true),
});
