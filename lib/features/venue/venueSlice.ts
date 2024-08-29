import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface venueState {
  name: string;
  isActive: boolean;
}

const initialState: venueState = {
  name: "Initial Venue",
  isActive: false,
};

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    addVenue: (state, action: PayloadAction<venueState>) => {
      state = action.payload;
    },
    toggleActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { addVenue, toggleActive } = venueSlice.actions;

export default venueSlice.reducer;
