import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice";
import editProfileSlice from "./editProfileSlice"
export const store = configureStore({
  reducer: {
    user: userSlice,
    editProfile: editProfileSlice
  },
});
