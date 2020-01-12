import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    show: false,
    selectedTheme:
      localStorage.getItem('selectedTheme') || 'WHITE',
  },
  reducers: {
    showThemePicker: state => {
      state.show = true
    },
    hideThemePicker: state => {
      state.show = false
    },
    selectTheme: (state, action) => {
      const theme = action.payload
      localStorage.setItem('selectedTheme', theme)
      state.selectedTheme = theme
    },
  },
})

export const {
  showThemePicker,
  hideThemePicker,
  selectTheme,
} = themeSlice.actions

export default themeSlice.reducer
