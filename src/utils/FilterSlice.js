import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: { all: true, completed: false, pending: false },
  reducers: {
    getAll: (state) => {
      state.all = true;
      state.completed = false;
      state.pending = false;
    },
    getCompleted: (state) => {
      state.all = false;
      state.completed = true;
      state.pending = false;
    },
    getPending: (state) => {
      state.all = false;
      state.completed = false;
      state.pending = true;
    },
  },
});

export const { getAll, getCompleted, getPending } = FilterSlice.actions;
export default FilterSlice.reducer;
