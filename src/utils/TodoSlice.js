import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    fillTodo: (state, action) => {
      return action.payload;
    },
    removeTodo: (state, action) => {
      state = state.filter((x) => x.id != action.payload);
      return state;
    },
  },
});

export const { addTodo, fillTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
