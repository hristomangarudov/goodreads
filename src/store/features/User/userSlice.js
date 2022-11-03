import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.username;
    },
  },
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
