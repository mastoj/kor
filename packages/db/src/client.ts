import { itemsPg, itemsSqlite } from "./schema.ts";

type DbContext =
  | {
      dialect: "sqlite";
      db: import("drizzle-orm/better-sqlite3").BetterSQLite3Database;
      items: typeof itemsSqlite;
    }
  | {
      dialect: "postgres";
      db: import("drizzle-orm/postgres-js").PostgresJsDatabase;
      items: typeof itemsPg;
    };

let _ctx: DbContext | null = null;

export async function getDbContext(): Promise<DbContext> {
  if (_ctx) return _ctx;

  if (process.env.NODE_ENV === "production") {
    const { drizzle } = await import("drizzle-orm/postgres-js");
    const postgres = (await import("postgres")).default;
    _ctx = {
      dialect: "postgres",
      db: drizzle(postgres(process.env.DATABASE_URL!)),
      items: itemsPg,
    };
  } else {
    const { drizzle } = await import("drizzle-orm/better-sqlite3");
    const Database = (await import("better-sqlite3")).default;
    _ctx = {
      dialect: "sqlite",
      db: drizzle(new Database(process.env.DATABASE_URL ?? "local.db")),
      items: itemsSqlite,
    };
  }

  return _ctx;
}
