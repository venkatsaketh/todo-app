import React, { useState } from "react";
// import { doc, deleteDoc, updateDoc } from "firebase/firestore";
// import { database } from "../utils/firebase";
import { removeTodo, toggleComplete, updateTodo } from "../utils/TodoSlice";
import { useDispatch } from "react-redux";
import DelModal from "./DelModal";
import UpdateModal from "./UpdateModal";
import { API_URL } from "../utils/constants";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const deleteTodo = async () => {
    // await deleteDoc(doc(database, "todos", todo.id));
    try {
      await fetch(API_URL + todo._id, {
        method: "DELETE",
      });
      dispatch(removeTodo(todo._id));
    } catch (err) {
      console.log(err);
    }
  };

  const ToggleComplete = async () => {
    // const Ref = doc(database, "todos", todo.id);
    // await updateDoc(Ref, {
    //   completed: !todo.completed,
    // });
    try {
      await fetch(API_URL + todo._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      dispatch(toggleComplete(todo._id));
    } catch (err) {
      console.log(err);
    }
  };

  const update = async (val) => {
    // const Ref = doc(database, "todos", todo._id);
    // await updateDoc(Ref, {
    //   text: val,
    // });
    try {
      await fetch(API_URL + todo._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: val }),
      });
      dispatch(updateTodo({ id: todo._id, val }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3 sm:px-10 rounded-lg mb-5 border-2 border-cyan-800">
      <div
        className={
          `flex justify-between ` +
          (todo.completed ? "text-green-500" : "text-white")
        }
      >
        <div className="w-6/12">
          <p>{todo.text}</p>
        </div>
        <div className="flex justify-between">
          <svg
            onClick={() => setUpdateModal(!updateModal)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          <svg
            onClick={ToggleComplete}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"w-6 h-6 ml-7 cursor-pointer"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>

          <svg
            onClick={() => setShowDeleteModal(!showDeleteModal)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-7 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
      {showDeleteModal ? (
        <DelModal showModal={setShowDeleteModal} deleteTodo={deleteTodo} />
      ) : null}
      {updateModal ? (
        <UpdateModal
          showModal={setUpdateModal}
          updateTodo={update}
          text={todo.text}
        />
      ) : null}
    </div>
  );
};

export default TodoCard;
