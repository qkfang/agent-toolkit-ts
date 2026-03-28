"use client";

import { cn } from "@/components/lib/utils";
import { setFilter, useTodoStore } from "@/store/use-todo-store";
import type { FilterValue } from "@/features/todo/types";

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export function TodoFilter() {
  const filter = useTodoStore((state) => state.filter);

  return (
    <div className="flex gap-4">
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          onClick={() => setFilter(value)}
          className={cn(
            "text-sm transition-colors",
            filter === value
              ? "border-b-2 border-primary pb-0.5 font-medium text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
