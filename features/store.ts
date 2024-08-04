import { configureStore } from "@reduxjs/toolkit";
import happeningReducer from "./happening/happeningSlice";

export const store = configureStore({
  reducer: {
    happening: happeningReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
