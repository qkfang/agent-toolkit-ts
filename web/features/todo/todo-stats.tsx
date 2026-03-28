"use client";

import { Button } from "@/components/ui/button";
import { clearCompleted, useTodoStore } from "@/store/use-todo-store";

export function TodoStats() {
  const todos = useTodoStore((state) => state.todos);

  const remainingCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {remainingCount} item{remainingCount !== 1 ? "s" : ""} remaining
      </span>
      {hasCompleted && (
        <Button variant="ghost" size="sm" onClick={clearCompleted}>
          Clear completed
        </Button>
      )}
    </div>
  );
}
