"use client";

import { completeTodo } from "@/utils/actions";
import React, { useTransition } from "react";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black/1 cursor-pointer mb-2 ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
