# create-kor

Scaffold a new **kor** full-stack monorepo in seconds.

## Usage

```bash
pnpm create kor <project-name>
# or
npx create-kor <project-name>
```

This will:

1. Clone the [kor](https://github.com/mastoj/kor) monorepo template into a new `<project-name>` directory
2. Set the root `package.json` name to your project name
3. Create `apps/web/.env.local` with a default API URL
4. Initialise a fresh git repository with an initial commit

## Getting started

```bash
cd <project-name>
pnpm install
pnpm dev
```

- **Web app** — [http://localhost:3000](http://localhost:3000)
- **API** — [http://localhost:3001](http://localhost:3001)

## What's inside

The scaffolded project is a pnpm monorepo with:

| Path | Description |
|---|---|
| `apps/web` | Next.js frontend (React Server Components, tRPC client) |
| `apps/api` | Hono API server with tRPC router |
| `packages/ui` | Shared UI components (Base UI) |
| `packages/db` | Drizzle ORM schema & client (SQLite / PostgreSQL) |
| `packages/domain` | Business logic / domain services |
| `packages/shared` | Shared types and utilities |

## Requirements

- Node.js >= 20
- pnpm
