import { createSlice } from '@reduxjs/toolkit'

const jokesSlice = createSlice({
  name: 'jokes',
  initialState: { loading: false, jokeList: [] },
  reducers: {
    requestJoke: state => {
      state.loading = true
    },
    requestJokeSuccess: (state, action) => {
      state.loading = false
      state.jokeList.unshift(action.payload)
    },
  },
})

export const {
  requestJoke,
  requestJokeSuccess,
} = jokesSlice.actions

export default jokesSlice.reducer
