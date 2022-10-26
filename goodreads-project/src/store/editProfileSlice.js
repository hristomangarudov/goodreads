import { createSlice } from "@reduxjs/toolkit";

const activeUser = JSON.parse(localStorage.getItem('activeUser'))

const initialState = {
  profileImg:activeUser?activeUser.profileImg:"http://bootdey.com/img/Content/avatar/avatar1.png",
  profileUsername: activeUser?activeUser.profileUsername:"",
  username: activeUser?activeUser.username:"",
  password: activeUser?activeUser.password:"",
  age: activeUser?activeUser.age:"",
  gender:activeUser?activeUser.gender:"",
  country: activeUser?activeUser.country:"",
  profession: activeUser?activeUser.profession:"",
};

export const editProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {
    changeUserData: (state, action) => {
      state.profileUsername = action.payload.profileUsername;
      // state.username = action.payload.username;
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
