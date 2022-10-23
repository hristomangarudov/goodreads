import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./firstSlice";
import editProfileReducer from './editProfileSlice'
export const store = configureStore({
  reducer: {
    editProfile: editProfileReducer
  },
});
