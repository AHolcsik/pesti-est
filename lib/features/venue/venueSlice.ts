import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import geojson from "../../../utils/geojson.json";

const data = geojson.features;

export interface venueState {
  type: string;
  properties: {
    name: string;
  };
  geometry: {
    coordinates: number[];
    type: string;
  };
  id: number;
  isActive: boolean;
}

const initialState: venueState = {
  type: "feature",
  properties: {
    name: "Klub Vittula",
  },
  geometry: {
    coordinates: [19.069235597016643, 47.49864155880687],
    type: "point",
  },
  id: 1,
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
