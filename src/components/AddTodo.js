import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/TodoSlice";
import { database } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [val, setval] = useState("");
  const dispatch = useDispatch();
  const addtodo = async (e) => {
    e.preventDefault();
    if (val === "") return;
    const docRef = await addDoc(collection(database, "todos"), {
      text: val,
      completed: false,
    });

    dispatch(addTodo({ id: docRef.id, text: val, completed: false }));
    setval("");
  };

  return (
    <div className="mt-7 text-center">
      <form onSubmit={addtodo}>
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
          className="bg-gray-700 p-2 px-5 w-9/12 border border-gray-500 rounded-md focus:outline-none"
        />
        <button className="ml-5 px-6 p-2 bg-cyan-600 rounded-md border border-gray-500">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
