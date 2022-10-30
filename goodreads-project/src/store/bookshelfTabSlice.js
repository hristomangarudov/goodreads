import { createSlice } from '@reduxjs/toolkit'
const activeUser = JSON.parse(localStorage.getItem('activeUser'))
const initialState = {
    bookshelfTitle:"currentlyReading",
    bookshelf:activeUser?activeUser.bookshelf: [],
    currentShelf:activeUser?activeUser.bookshelf.currentlyReading : []
}

export const bookshelfTabSlice = createSlice({
  name: 'shelf',
  initialState,
  reducers: {
    getBookshelf: (state,action) => {
      state.bookshelfTitle = action.payload
    },
    getNewBookshelf: (state,action) => {
        state.bookshelf = action.payload
      },
    getUserShelf:(state,action) => {
        state.currentShelf = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { getBookshelf,getNewBookshelf,getUserShelf } = bookshelfTabSlice.actions

export default bookshelfTabSlice.reducer