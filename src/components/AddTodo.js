import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/TodoSlice";
// import { database } from "../utils/firebase";
// import { collection, addDoc } from "firebase/firestore";
import { API_URL } from "../utils/constants";

const AddTodo = () => {
  const [val, setval] = useState("");
  const dispatch = useDispatch();
  const addtodo = async (e) => {
    e.preventDefault();
    if (val === "") return;
    // const docRef = await addDoc(collection(database, "todos"), {
    //   text: val,
    //   completed: false,
    // });
    fetch(API_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        text: val,
        completed: false,
      }),
    })
      .then(async function (res) {
        let res1 = await res.json();
        dispatch(
          addTodo({
            _id: res1.task._id,
            text: res1.task.text,
            completed: res1.task.completed,
          })
        );
      })
      .catch(function (res) {
        console.log(res);
      });

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
    </div>
  );
};

export default AddTodo;
