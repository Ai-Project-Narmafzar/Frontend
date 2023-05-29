import React from 'react'
import Api from 'utils/Api'

const SIGNUP_USER_URL = `/auth/register/`

const AuthService = () => {
  const Register = (data) => {
    return Api.post(SIGNUP_USER_URL, data)
  }

  return { Register }
}

export default AuthService
