import React from 'react'
import Api from 'utils/Api'

const SIGNUP_USER_URL = `/auth/register/`
const LOGIN_USER_URL = `/auth/login/`
const GET_USER_PROFILE = (id) => `/profile/${id}`

const AuthService = () => {
  const Register = (data) => {
    return Api.post(SIGNUP_USER_URL, data)
  }

  const Login = (data) => {
    return Api.post(LOGIN_USER_URL, data)
  }

  const GetUserProfile = (id) => {
    return Api.get(GET_USER_PROFILE(id))
  }

  return { Register, Login, GetUserProfile }
}

export default AuthService
