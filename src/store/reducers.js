import { combineReducers } from 'redux'

import * as auth from './authRedux/reducer'
import * as common from './commonRedux/reducer'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  common: common.reducer,
})
