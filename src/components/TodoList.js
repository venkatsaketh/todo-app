import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((store) => store.todo);
  const filtert = useSelector((store) => store.filter);
  let filteredTodos = todos;
  if (filtert.completed) {
    filteredTodos = todos.filter((todo) => todo.completed);
  }
  if (filtert.pending) {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }
  return (
    <div className="mt-7 px-6 sm:px-8 pb-10 max-h-[400px] overflow-y-scroll no-scrollbar">
      {filteredTodos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
