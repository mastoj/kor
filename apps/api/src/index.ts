import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "./router.ts"

const app = new Hono()

app.use("*", cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:3000" }))

app.get("/health", (c) => c.json({ status: "ok", ts: Date.now() }))

app.all("/trpc/*", (c) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext: () => ({}),
  })
)

const port = Number(process.env.PORT ?? 3001)
console.log(`API server running on http://localhost:${port}`)

serve({ fetch: app.fetch, port })
