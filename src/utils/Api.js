import axios from 'axios'
import qs from 'qs'

import { actions } from 'store/authRedux/actions'

import { toast } from 'react-toastify'
import history from './history'

let store

// intercptor for initializing store variable
export const setUpInterceptorStore = (_store) => {
  store = _store
}

// logout user from server and local store
const logoutUser = (refreshToken) => {
  //   LogoutBlacklist(refreshToken)
  store.dispatch(actions.logout())
  history.push('/auth')
}

// create axios instance
const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      arrayFormat: 'repeat',
    })
  },
})

// API Request interceptor
Api.interceptors.request.use(
  (config) => {
    const access_token = store.getState().auth.token

    // add access token to headers if exists
    if (access_token) {
      if (config.params) {
        if (config.params.remove_token) return config
      }
      config.headers['Authorization'] = `token ${access_token}`
      config.headers[`Accept-Language`] = 'fa'
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// API respone interceptor
Api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // check if network error
    if (!error.response || error.message == 'Network Error') {
      toast.error('خطا در اتصال به اینترنت')
    }

    // handle 401 error
    else if (error.response.status === 401) {
      logoutUser()
    }

    // handle 404 error
    else if (error.response.status === 404) {
      toast.error('اطلاعات مورد نظر یافت نشد')
    }

    // handle 429 error
    else if (error.response.status === 429) {
      toast.error(
        'تعداد درخواست هاش ما از حد مجاز گذشته است لطفا بعد از یک دقیقه دوباره تلاش کنید',
      )
    }

    // handle 500 error
    else if (error.response.status === 500) {
      toast.error('خطایی در سرور رخ داده است! لطفا بعدا تلاش کنید')
    }

    // handle 508 error
    else if (error.response.status === 508) {
      toast.error('خطا در اتصال به سرور')
    }

    return Promise.reject(error)
  },
)

export default Api
