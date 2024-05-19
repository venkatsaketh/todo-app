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
      state = state.filter((x) => x._id !== action.payload);
      return state;
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo._id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.find((todo) => todo._id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.completed = action.payload.completed;
      }
    },
  },
});

export const { addTodo, fillTodo, removeTodo, toggleComplete, updateTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
