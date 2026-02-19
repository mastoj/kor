# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project context is maintained in `.ai/`:
- `.ai/project.yaml` — apps, packages, versions
- `.ai/architecture.yaml` — package graph, data flow, key files
- `.ai/conventions.yaml` — module system, naming, DB dialects
- `.ai/commands.yaml` — common commands and dev URLs
- `.ai/snippets.yaml` — how to add tRPC procedures, Drizzle tables, domain services

## Adding UI Components

shadcn/ui components are installed into `packages/ui`:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Import as: `import { Button } from "@workspace/ui/components/button"`
