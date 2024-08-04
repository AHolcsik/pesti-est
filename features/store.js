import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import happeningReducer from "./happening/happeningSlice";

export const store = configureStore({
  reducer: {
    happening: happeningReducer,
  },
});

export const Rootstate = store.getState;
export const AppDispatch = store.dispatch;
