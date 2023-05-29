export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  SetUser: '[Set User] Action',
  RefreshUser: '[Refresh User] Action',
}

export const actions = {
  login: ({ token, user }) => ({
    type: actionTypes.Login,
    payload: { token, user },
  }),
  refresh: (access) => ({
    type: actionTypes.RefreshUser,
    payload: { access },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
}
