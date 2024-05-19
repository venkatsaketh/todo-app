import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/TodoSlice";
// import { database } from "../utils/firebase";
// import { collection, addDoc } from "firebase/firestore";
import { API_URL } from "../utils/constants";

const AddTodo = () => {
  const [val, setval] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState("");
  const dispatch = useDispatch();
  const addtodo = async (e) => {
    e.preventDefault();
    if (val === "") return;
    // const docRef = await addDoc(collection(database, "todos"), {
    //   text: val,
    //   completed: false,
    // });
    try {
      let res = await fetch(API_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          text: val,
          completed: false,
        }),
      });
      res = await res.json();
      if (res.msg) throw new Error(res.msg);
      dispatch(
        addTodo({
          _id: res.task._id,
          text: res.task.text,
          completed: res.task.completed,
        })
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setFail(error.message);
      setTimeout(() => {
        setFail("");
      }, 3000);
    }
    setval("");
  };

  return (
    <div className="mt-7 sm:text-center p-6 sm:p-8">
      <form onSubmit={addtodo} className="flex justify-between">
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
          className="bg-gray-700 p-2 px-5 w-11/12 border border-gray-500 rounded-md focus:outline-none sm:ml-0 "
        />
        <button className="ml-5 px-6 p-2 bg-cyan-600 rounded-md border border-gray-500">
          ADD
        </button>
      </form>
      {success && (
        <div className="text-green-500 text-left mt-3">
          Todo added successfully!!
        </div>
      )}
      {fail !== "" && <div className="text-left mt-3 text-red-600">{fail}</div>}
    </div>
  );
};

export default AddTodo;
