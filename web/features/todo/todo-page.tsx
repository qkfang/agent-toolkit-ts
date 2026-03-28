"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { TodoFilter } from "@/features/todo/todo-filter";
import { TodoInput } from "@/features/todo/todo-input";
import { TodoList } from "@/features/todo/todo-list";
import { TodoStats } from "@/features/todo/todo-stats";

export function TodoPage() {
  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-16">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <Heading variant="h1">My Todos</Heading>
        <Card>
          <CardContent className="flex flex-col gap-4 pt-6">
            <TodoInput />
            <TodoFilter />
            <TodoList />
            <TodoStats />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
