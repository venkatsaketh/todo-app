import React from "react";
import { useState } from "react";
import LoaderWa from "./LoaderWa";

const UpdateModal = ({ showModal, updateTodo, text, completed }) => {
  const [val, setVal] = useState(text);
  const [comp, setComp] = useState(completed);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className=" relative w-[350px] my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" bg-gray-900 flex items-start justify-between px-5 pt-3 border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">Update</h3>
              <button
                className=" ml-auto bg-transparent border-0 text-cyan-400  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => showModal(false)}
              >
                <span className=" text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            {loading ? (
              <LoaderWa />
            ) : (
              <div className=" bg-gray-900 relative p-6 pb-0 flex-auto">
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  className="bg-gray-700 p-2 px-5 border w-[90%] border-gray-500 rounded-md focus:outline-none"
                />
                <div className="mt-4 ml-2 flex">
                  <label className="mr-3">Completed :</label>
                  <input
                    type="checkbox"
                    checked={comp}
                    onChange={(e) => setComp(e.target.checked)}
                    className="mt-[3px]"
                  ></input>
                </div>
              </div>
            )}
            {/*footer*/}
            <div className="modal bg-gray-900 flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => showModal(false)}
              >
                NO
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={async () => {
                  setLoading(true);
                  await updateTodo({ text: val, completed: comp });
                  setLoading(false);
                  showModal(false);
                }}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default UpdateModal;
