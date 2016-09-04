import { combineReducers } from 'redux'
import jokes from './jokes'
import themePicker from './themePicker'

const rootReducer = combineReducers({ jokes, themePicker })

export default rootReducer
