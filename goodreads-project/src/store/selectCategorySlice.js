import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    radioValue:"Fiction",
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getRadioValue: (state,action) => {
      state.radioValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getRadioValue } = categorySlice.actions

export default categorySlice.reducer