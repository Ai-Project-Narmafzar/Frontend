export const actionTypes = {
  SET_LOADING_ON: '[Loading On] Action',
  SET_LOADING_OFF: '[Loading Off] Action',
}

export const actions = {
  loadingOn: () => ({
    type: actionTypes.SET_LOADING_ON,
    payload: true,
  }),
  loadingOff: () => ({
    type: actionTypes.SET_LOADING_OFF,
    payload: false,
  }),
}
