import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getCompleted, getPending } from "../utils/FilterSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);
  const activeTodos = todos.filter((x) => !x.completed);
  const filter = useSelector((store) => store.filter);
  return (
    <div className="border-t-2 border-cyan-500 sm:flex justify-between px-3 py-4 mx-4 sm:mx-0 sm:px-6">
      <p className="sm:w-4/12 md:w-6/12 text-center sm:text-start">
        {activeTodos.length} remaining todo{activeTodos.length > 1 ? "s" : ""}
      </p>
      <div className="mt-5 sm:mt-0 sm:w-7/12 md:w-6/12  flex justify-between">
        <button
          className={
            "border-gray-500 border-2 px-1 sm:px-3 rounded-md hover:border-cyan-700 " +
            (filter.all ? "bg-cyan-700" : "")
          }
          onClick={() => {
            dispatch(getAll());
          }}
        >
          All
        </button>
        <button
          className={
            "border-gray-500  border-2 px-1 sm:px-3 rounded-md hover:border-cyan-700 " +
            (filter.completed ? "bg-cyan-700" : "")
          }
          onClick={() => {
            dispatch(getCompleted());
          }}
        >
          Completed
        </button>
        <button
          className={
            "border-gray-500 border-2 px-1 sm:px-3 rounded-md hover:border-cyan-700 " +
            (filter.pending ? "bg-cyan-700" : "")
          }
          onClick={() => {
            dispatch(getPending());
          }}
        >
          Pending
        </button>
      </div>
    </div>
  );
};

export default Footer;
