import {createSlice} from '@reduxjs/toolkit'
import {navigationItems} from "./navigationItems";

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    selected: Object.entries(navigationItems).shift()
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = Object.entries(navigationItems).find(([key, value]) => key === action.payload) || state.selected
    }
  }
})

export const {setSelected} = navigationSlice.actions
export const selected = (state) => state.navigation.selected
export default navigationSlice.reducer
