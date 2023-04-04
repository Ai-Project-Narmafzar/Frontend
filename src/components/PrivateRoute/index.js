import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({ isAuthorized: auth.user != null }),
    shallowEqual,
  )

  if (!isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
