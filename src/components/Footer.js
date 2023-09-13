import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getCompleted, getPending } from "../utils/FilterSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);
  const activeTodos = todos.filter((x) => !x.completed);
  const filter = useSelector((store) => store.filter);
  return (
    <div className="border-t-2 border-cyan-500 flex justify-between px-3 py-4 mx-2 sm:mx-0 sm:px-6">
      <p className="w-5/12 md:w-6/12">
        {activeTodos.length} remaining todo{activeTodos.length > 1 ? "s" : ""}
      </p>
      <div className="w-7/12 md:w-6/12 ml-2 sm:ml-0 flex justify-between">
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
