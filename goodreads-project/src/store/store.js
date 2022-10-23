import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import counterReducer from "./firstSlice";
import editProfileReducer from './editProfileSlice'
export const store = configureStore({
  reducer: {
    editProfile: editProfileReducer
=======
import userSlice from "./features/User/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice
>>>>>>> d0a35697c23ec26e19f4d27b6231ca91657e9890
  },
});
