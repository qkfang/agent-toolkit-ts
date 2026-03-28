"use client";

import { useTodoStore } from "@/store/use-todo-store";
import { TodoItem } from "@/features/todo/todo-item";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p className="py-4 text-center text-sm text-muted-foreground">No todos here.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
