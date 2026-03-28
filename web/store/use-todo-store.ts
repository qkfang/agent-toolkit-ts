import { create } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";

import type { FilterValue, Todo } from "@/features/todo/types";

export interface TodoState {
  todos: Todo[];
  filter: FilterValue;
}

export const useTodoStore = create<TodoState>()(
  subscribeWithSelector(
    persist(
      () => ({
        todos: [] as Todo[],
        filter: "all" as FilterValue,
      }),
      {
        name: "todo-store",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export const addTodo = (text: string) => {
  const trimmed = text.trim();
  if (!trimmed) return;
  const todo: Todo = {
    id: crypto.randomUUID(),
    text: trimmed,
    completed: false,
    createdAt: Date.now(),
  };
  useTodoStore.setState((state) => ({ todos: [todo, ...state.todos] }));
};

export const toggleTodo = (id: string) => {
  useTodoStore.setState((state) => ({
    todos: state.todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
  }));
};

export const deleteTodo = (id: string) => {
  useTodoStore.setState((state) => ({
    todos: state.todos.filter((t) => t.id !== id),
  }));
};

export const clearCompleted = () => {
  useTodoStore.setState((state) => ({
    todos: state.todos.filter((t) => !t.completed),
  }));
};

export const setFilter = (filter: FilterValue) => {
  useTodoStore.setState({ filter });
};
