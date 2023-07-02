import React from 'react'
import Api from 'utils/Api'

const SIGNUP_USER_URL = `/auth/register/`
const LOGIN_USER_URL = `/auth/login/`
const GET_USER_PROFILE = (id) => `/profile/${id}`
const UPDATE_PROFILE_URL = (id) => `/profile/`

const AuthService = () => {
  const Register = (data) => {
    return Api.post(SIGNUP_USER_URL, data)
  }

  const Login = (data) => {
    return Api.post(LOGIN_USER_URL, data)
  }

  const GetUserProfile = (id, params) => {
    return Api.get(GET_USER_PROFILE(id), { params })
  }

  const UpdateUserProfile = (data) => {
    return Api.patch(UPDATE_PROFILE_URL(), data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  return { Register, Login, GetUserProfile, UpdateUserProfile }
}

export default AuthService
