import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profileImg: "http://bootdey.com/img/Content/avatar/avatar1.png",
  username: "Evlogi Georgiev",
  age: "20",
  gender: "Male",
  country: "Bulgaria",
  profession: "IT Specialist",
};

export const editProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {
    changeUserData: (state, action) => {
      state.username = action.payload.username;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.country = action.payload.country;
      state.profession = action.payload.profession;
    },
    changeProfilePicture: (state, action) => {
      state.profileImg = action.payload.profileImg;
    },
  },
});

export const { changeUserData, changeProfilePicture } =
  editProfileSlice.actions;

export default editProfileSlice.reducer;
