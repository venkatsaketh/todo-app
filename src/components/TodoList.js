import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((store) => store.todo);
  console.log(todos.length);
  return (
    <div className="mt-7 px-6 sm:px-8 pb-10 max-h-[500px] overflow-y-scroll no-scrollbar">
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
