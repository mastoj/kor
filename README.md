# kor

A full-stack monorepo starter built with Next.js, Hono, tRPC, Drizzle ORM, and shadcn/ui.

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router, RSC) |
| Backend | Hono API server with tRPC |
| Database | Drizzle ORM — SQLite locally, Postgres in production |
| UI | shadcn/ui components in `packages/ui` |
| Monorepo | Turborepo + pnpm workspaces |

## Apps & Packages

- `apps/web` — Next.js frontend (port 3000)
- `apps/api` — Hono API server with tRPC router (port 3001)
- `packages/ui` — Shared shadcn/ui component library
- `packages/db` — Drizzle schema, client, and migrations
- `packages/domain` — Business logic / domain services
- `packages/shared` — Shared types and utilities

## Getting Started

See [docs/getting-started.md](./docs/getting-started.md) for full setup instructions.

## Adding UI Components

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Components land in `packages/ui/src/components` and are imported as:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Common Commands

```bash
pnpm dev           # start all apps
pnpm build         # build all apps
pnpm lint          # lint all packages
pnpm typecheck     # type-check all packages
pnpm db:push       # push schema changes (SQLite locally)
pnpm db:generate   # generate migration files
```
