import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
  id: uuid().notNull().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow()
})
