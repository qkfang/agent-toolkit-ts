"use client";

import { Delete01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/components/lib/utils";
import { deleteTodo, toggleTodo } from "@/store/use-todo-store";
import type { Todo } from "@/features/todo/types";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={todo.id} checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
      <label
        htmlFor={todo.id}
        className={cn(
          "flex-1 cursor-pointer text-sm select-none",
          todo.completed && "text-muted-foreground line-through",
        )}
      >
        {todo.text}
      </label>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <HugeiconsIcon icon={Delete01Icon} size={16} />
      </Button>
    </div>
  );
}
