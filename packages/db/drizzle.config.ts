import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "drizzle-kit";

// Resolves to <repo-root>/local.db regardless of which directory drizzle-kit runs from
const DEFAULT_DB_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../local.db",
);

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: process.env.NODE_ENV === "production" ? "postgresql" : "sqlite",
  dbCredentials: { url: process.env.DATABASE_URL ?? DEFAULT_DB_PATH },
});
