import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { actionTypes } from './actions'

const initialCommonState = {
  loading: false,
}

export const reducer = persistReducer(
  {
    storage,
    key: 'shine-common-variables',
    blacklist: [],
  },
  (state = initialCommonState, action) => {
    switch (action.type) {
      case actionTypes.SET_LOADING_ON: {
        return {
          ...state,
          loading: action.payload,
        }
      }

      case actionTypes.SET_LOADING_OFF: {
        return {
          ...state,
          loading: action.payload,
        }
      }

      default:
        return state
    }
  },
)
