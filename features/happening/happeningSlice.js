import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Initial Happening",
};

const happeningSlice = createSlice({
  name: "happening",
  initialState,
  reducers: {
    addHappening: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addHappening } = happeningSlice.actions;

export default happeningSlice.reducer;
