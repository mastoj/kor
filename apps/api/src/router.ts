import { initTRPC } from "@trpc/server";
import { itemService } from "@workspace/domain/items";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  items: t.router({
    list: t.procedure.query(() => itemService.listItems()),
    create: t.procedure
      .input(z.object({ name: z.string().min(1) }))
      .mutation(({ input }) => itemService.createItem(input.name)),
  }),
});

export type AppRouter = typeof appRouter;
