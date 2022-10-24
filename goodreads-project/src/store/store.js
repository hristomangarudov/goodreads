import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice";
import editProfileReducer from "./editProfileSlice";
export const store = configureStore({
  reducer: {
    editProfile: editProfileReducer,
    user: userSlice,
  },
});
