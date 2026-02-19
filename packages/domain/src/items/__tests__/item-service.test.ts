import { beforeEach, describe, expect, it, vi } from "vitest";
import { ItemService } from "../item-service.ts";

const mockAll = vi.fn();
const mockValues = vi.fn();

vi.mock("@workspace/db/client", () => ({
  getDbContext: vi.fn(() =>
    Promise.resolve({
      dialect: "sqlite",
      db: {
        select: vi.fn(() => ({ from: vi.fn(() => ({ all: mockAll })) })),
        insert: vi.fn(() => ({ values: mockValues })),
      },
      items: {},
    }),
  ),
}));

describe("ItemService", () => {
  let service: ItemService;

  beforeEach(() => {
    service = new ItemService();
    vi.clearAllMocks();
  });

  describe("listItems", () => {
    it("returns all items from the database", async () => {
      const mockItems = [{ id: "1", name: "Widget", createdAt: "2024-01-01" }];
      mockAll.mockReturnValue(mockItems);

      const result = await service.listItems();

      expect(result).toEqual(mockItems);
    });

    it("returns empty array when no items exist", async () => {
      mockAll.mockReturnValue([]);

      const result = await service.listItems();

      expect(result).toEqual([]);
    });
  });

  describe("createItem", () => {
    it("creates an item with the given name", async () => {
      mockValues.mockResolvedValue(undefined);

      const result = await service.createItem("New Widget");

      expect(result.name).toBe("New Widget");
      expect(result.id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
      expect(result.createdAt).toBeDefined();
    });
  });
});
