import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootReducer from './rootReducer'
import App from './App'

require('babel-core/register')
require('babel-polyfill')

let store = configureStore({
  reducer: rootReducer,
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
