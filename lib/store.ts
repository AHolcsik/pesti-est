import { configureStore } from "@reduxjs/toolkit";
import happeningReducer from "./features/happening/happeningSlice";
import venueReducer from "./features/venue/venueSlice";
import spotifyReducer from "./features/spotify/spotifySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      happening: happeningReducer,
      spotify: spotifyReducer,
      venue: venueReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
