import { sql } from "drizzle-orm"
import { text as pgText, timestamp as pgTimestamp, pgTable } from "drizzle-orm/pg-core"
import { text, sqliteTable } from "drizzle-orm/sqlite-core"

// SQLite (local dev)
export const itemsSqlite = sqliteTable("items", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(datetime('now'))`),
})

// Postgres (production)
export const itemsPg = pgTable("items", {
  id: pgText("id").primaryKey(),
  name: pgText("name").notNull(),
  createdAt: pgTimestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export type Item = { id: string; name: string; createdAt: string | Date }
