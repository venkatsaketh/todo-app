import React from "react";
import { useState } from "react";
import LoaderWa from "./LoaderWa";
const DelModal = ({ showModal, deleteTodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[400px] my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="relative bg-gray-900 p-6 flex-auto">
              {loading ? (
                <LoaderWa />
              ) : (
                <p className="my-4 text-white text-lg leading-relaxed">
                  Are you sure you want to delete?
                </p>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center bg-gray-900 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  await deleteTodo();
                  setLoading(false);
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

export default DelModal;
