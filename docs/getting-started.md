# Getting Started

## Prerequisites

- Node.js 20+
- pnpm 10+

## Install

```bash
pnpm install
```

## Database Setup

Push the schema to a local SQLite database:

```bash
pnpm db:push
```

This creates `local.db` in the `packages/db` directory with the `items` table.

## Run

```bash
pnpm dev
```

This starts both apps via Turbo:
- **Web** → http://localhost:3000
- **API** → http://localhost:3001

## Verify

- http://localhost:3001/health → `{"status":"ok"}`
- http://localhost:3000/design → Design system showcase
- http://localhost:3000/trpc-demo → Live tRPC demo (items list + create)

## Environment Variables

Copy `.env.local` values to the relevant apps or set them in your shell:

| Variable | Default | Description |
|---|---|---|
| `DATABASE_URL` | `./local.db` | SQLite file path (dev) or Postgres URL (prod) |
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001/trpc` | tRPC endpoint for the browser |
| `WEB_ORIGIN` | `http://localhost:3000` | CORS allowed origin for the API |

## Adding a tRPC Procedure

1. Open `apps/api/src/router.ts`
2. Add a procedure to `appRouter` (or a sub-router):

```ts
myProcedure: t.procedure
  .input(z.object({ id: z.string() }))
  .query(({ input }) => myService.findById(input.id)),
```

3. Use it in the web app:

```ts
const trpc = useTRPC()
const { data } = useQuery(trpc.myProcedure.queryOptions({ id: "123" }))
```

## Adding a Database Table

1. Open `packages/db/src/schema.ts`
2. Add both SQLite and Postgres definitions:

```ts
export const myTableSqlite = sqliteTable("my_table", { ... })
export const myTablePg = pgTable("my_table", { ... })
```

3. Handle both in `packages/db/src/client.ts` `getDbContext()`
4. Run `pnpm db:push` to apply changes

## Production (Postgres)

Set `NODE_ENV=production` and `DATABASE_URL` to a Postgres connection string.
The database client will automatically switch to Postgres.
