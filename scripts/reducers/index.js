import { combineReducers } from 'redux'
import jokes from './jokes'

const jokesApp = combineReducers({
  jokes
})

export default jokesApp
