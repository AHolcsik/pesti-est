import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface happeningState {
  name: string;
}

const initialState: happeningState = {
  name: "Initial Happening",
};

const happeningSlice = createSlice({
  name: "happening",
  initialState,
  reducers: {
    addHappening: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { addHappening } = happeningSlice.actions;

export default happeningSlice.reducer;
