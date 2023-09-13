import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import FilterSlice from "./FilterSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
    filter: FilterSlice,
  },
});
