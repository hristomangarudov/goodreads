import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./firstSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
