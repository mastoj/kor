import { getDbContext } from "@workspace/db/client";
import type { Item } from "@workspace/db/schema";

export class ItemService {
  async listItems(): Promise<Item[]> {
    const ctx = await getDbContext();
    if (ctx.dialect === "sqlite") {
      return ctx.db.select().from(ctx.items).all() as unknown as Item[];
    }
    return ctx.db.select().from(ctx.items) as unknown as Item[];
  }

  async createItem(name: string): Promise<Item> {
    const ctx = await getDbContext();
    const id = crypto.randomUUID();
    if (ctx.dialect === "sqlite") {
      const createdAt = new Date().toISOString();
      await ctx.db.insert(ctx.items).values({ id, name, createdAt });
      return { id, name, createdAt };
    }
    const createdAt = new Date();
    await ctx.db.insert(ctx.items).values({ id, name, createdAt });
    return { id, name, createdAt };
  }
}

export const itemService = new ItemService();
