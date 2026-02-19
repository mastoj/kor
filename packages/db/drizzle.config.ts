import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: process.env.NODE_ENV === "production" ? "postgresql" : "sqlite",
  dbCredentials: { url: process.env.DATABASE_URL ?? "local.db" },
})
