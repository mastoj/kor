"use client";

import { useTRPC } from "@/lib/trpc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
import { Skeleton } from "@workspace/ui/components/skeleton";
import * as React from "react";

export default function TRPCDemoPage() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");

  const {
    data: items,
    isLoading,
    error,
  } = useQuery(trpc.items.list.queryOptions());

  const createItem = useMutation(
    trpc.items.create.mutationOptions({
      onSuccess: () => {
        void queryClient.invalidateQueries(trpc.items.list.queryFilter());
        setName("");
      },
    }),
  );

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">tRPC Demo</h1>
        <p className="text-muted-foreground mt-1">
          End-to-end type-safe API calls via Hono + tRPC on port 3001.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create Item</CardTitle>
          <CardDescription>Add a new item to the database.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (name.trim()) {
                createItem.mutate({ name: name.trim() });
              }
            }}
          >
            <Input
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={createItem.isPending}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={createItem.isPending || !name.trim()}
            >
              {createItem.isPending ? "Adding..." : "Add"}
            </Button>
          </form>
          {createItem.isError && (
            <p className="text-destructive text-sm mt-2">
              Error: {createItem.error.message}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Items{" "}
            {items && (
              <Badge variant="secondary" className="ml-2">
                {items.length}
              </Badge>
            )}
          </CardTitle>
          <CardDescription>All items stored in the database.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <p className="text-destructive text-sm">
              Failed to load items. Is the API server running on port 3001?
            </p>
          )}
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-4/5" />
            </div>
          )}
          {items && items.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-4">
              No items yet. Create one above.
            </p>
          )}
          {items && items.length > 0 && (
            <ul className="space-y-1">
              {items.map((item, i) => (
                <React.Fragment key={item.id}>
                  {i > 0 && <Separator />}
                  <li className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {item.id.slice(0, 8)}…
                    </span>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
