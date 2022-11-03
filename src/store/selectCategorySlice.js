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

export const { getRadioValue } = categorySlice.actions

export default categorySlice.reducer