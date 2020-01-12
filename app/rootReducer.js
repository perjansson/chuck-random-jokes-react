import { combineReducers } from 'redux'

import jokes from './jokes/reducer'
import theme from './theme/reducer'

export default combineReducers({ jokes, theme })
