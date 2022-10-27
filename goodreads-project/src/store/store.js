import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice";
import editProfileReducer from "./editProfileSlice";
import categoryReducer  from "./selectCategorySlice";
export const store = configureStore({
  reducer: {
    editProfile: editProfileReducer,
    user: userSlice,
    category: categoryReducer,
  },
});
