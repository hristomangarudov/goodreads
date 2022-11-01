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

// Action creators are generated for each case reducer function
export const { editUser } = userSlice.actions;

export default userSlice.reducer;
