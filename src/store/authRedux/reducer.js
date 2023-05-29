import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { actionTypes, actions } from './actions'

const initialAuthState = {
  user: undefined,
  token: undefined,
}

export const reducer = persistReducer(
  { storage, key: 'artiglow-auth', blacklist: [] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { token, user } = action.payload

        return { token, user }
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.SetUser: {
        const { user } = action.payload
        return { ...state, user }
      }

      case actionTypes.RefreshUser: {
        const { access } = action.payload
        return { ...state, access }
      }
      default:
        return state
    }
  },
)
