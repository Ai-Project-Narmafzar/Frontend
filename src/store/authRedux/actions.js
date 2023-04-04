export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  SetUser: '[Set User] Action',
  RefreshUser: '[Refresh User] Action',
}

export const actions = {
  login: (access, refresh, user) => ({
    type: actionTypes.Login,
    payload: { access, refresh, user },
  }),
  refresh: (access) => ({
    type: actionTypes.RefreshUser,
    payload: { access },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
}
