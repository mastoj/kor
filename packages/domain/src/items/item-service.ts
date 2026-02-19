import { getDbContext } from "@workspace/db/client"
import type { Item } from "@workspace/db/schema"

export class ItemService {
  async listItems(): Promise<Item[]> {
    const { db, items } = await getDbContext()
    return db.select().from(items as never).all() as unknown as Item[]
  }

  async createItem(name: string): Promise<Item> {
    const { db, items } = await getDbContext()
    const id = crypto.randomUUID()
    const createdAt = new Date().toISOString()
    await db.insert(items as never).values({ id, name, createdAt })
    return { id, name, createdAt }
  }
}

export const itemService = new ItemService()
