import user from './user-redux'
import goods from './goods-redux'

import {combineReducers} from 'redux'

export default combineReducers({
  user,
  goods
})