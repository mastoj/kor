# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, Cursor, etc.) when working with code in this repository.

Project context is maintained in `.ai/`:
- `.ai/project.yaml` — apps, packages, versions
- `.ai/architecture.yaml` — package graph, data flow, key files
- `.ai/conventions.yaml` — module system, naming, DB dialects
- `.ai/commands.yaml` — common commands and dev URLs
- `.ai/snippets.yaml` — how to add tRPC procedures, Drizzle tables, domain services
- `.ai/commit.yaml` — commit message format and conventions
- `.ai/linting.yaml` — biome setup, rules, and overrides
- `.ai/testing.yaml` — testing setup, conventions, and how to add tests
- `.ai/ui.yaml` — UI library (Base UI), component patterns, render vs asChild

## Adding UI Components

shadcn/ui components are installed into `packages/ui`:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Import as: `import { Button } from "@workspace/ui/components/button"`
