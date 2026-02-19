.DEFAULT_GOAL := help

# ── Development ───────────────────────────────────────────────────────────────

.PHONY: kor
kor: ## Install dependencies, push DB schema, and start dev servers
	pnpm install
	pnpm db:push
	pnpm dev

.PHONY: install
install: ## Install all dependencies
	pnpm install

.PHONY: dev
dev: ## Start web + api in development mode
	pnpm dev

.PHONY: build
build: ## Build all apps and packages
	pnpm build

# ── Code quality ──────────────────────────────────────────────────────────────

.PHONY: lint
lint: ## Check linting and formatting (biome)
	pnpm lint

.PHONY: lint-fix
lint-fix: ## Auto-fix lint and formatting issues
	pnpm lint:fix

.PHONY: format
format: ## Format all files
	pnpm format

.PHONY: typecheck
typecheck: ## Type-check all packages
	pnpm typecheck

.PHONY: check
check: lint typecheck test ## Run lint + typecheck + unit tests (same as pre-commit)

# ── Testing ───────────────────────────────────────────────────────────────────

.PHONY: test
test: ## Run unit tests
	pnpm test

.PHONY: test-watch
test-watch: ## Run unit tests in watch mode
	pnpm test:watch

.PHONY: test-e2e
test-e2e: ## Run end-to-end tests (requires running dev server)
	pnpm test:e2e

# ── Database ──────────────────────────────────────────────────────────────────

.PHONY: db-push
db-push: ## Push schema changes to the local SQLite database
	pnpm db:push

.PHONY: db-generate
db-generate: ## Generate migration files from schema changes
	pnpm db:generate

# ── Help ──────────────────────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z0-9_-]+:.*## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'
