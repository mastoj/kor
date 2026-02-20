# create-kor

Scaffold a new **kör** full-stack monorepo in seconds.

## Usage

```bash
pnpm create kor <project-name>
# or
npx create-kor <project-name>
```

This will:

1. Clone the [kör](https://github.com/mastoj/kor) monorepo template into a new `<project-name>` directory
2. Set the root `package.json` name to your project name
3. Create `apps/web/.env.local` with a default API URL
4. Initialise a fresh git repository with an initial commit

## Getting started

If you have [Make](https://www.gnu.org/software/make/) installed, a single command handles everything:

```bash
cd <project-name>
make kor
```

Otherwise, run the steps manually:

```bash
cd <project-name>
pnpm install
pnpm db:push
pnpm dev
```

- **Home** — [http://localhost:3000](http://localhost:3000)
- **tRPC demo** — [http://localhost:3000/trpc-demo](http://localhost:3000/trpc-demo)
- **Design system** — [http://localhost:3000/design](http://localhost:3000/design)
- **API health** — [http://localhost:3001/health](http://localhost:3001/health)

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
