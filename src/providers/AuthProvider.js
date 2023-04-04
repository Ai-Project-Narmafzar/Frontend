import React, { useRef, useEffect, useState } from 'react'
import { shallowEqual, useSelector, connect, useDispatch } from 'react-redux'

import { actions as authActions } from 'store/authRedux/actions'

import { SplashScreen } from 'components'

import { toast } from 'react-toastify'

function AuthProvider(props) {
  const { refreshToken, isAuthorized, userInfo } = useSelector(
    ({ auth }) => ({
      refreshToken: auth.refresh,
      isAuthorized: auth.access != null,
      userInfo: auth.user,
    }),
    shallowEqual,
  )

  const didRequest = useRef(false)
  const dispatch = useDispatch()

  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          if (refreshToken !== undefined) {
            // fetch new access token
            // const access = await GetUserByRefresh(refreshToken)
            // dispatch(authActions.refresh(access.access))
          } else {
            dispatch(authActions.logout())
          }
        }
      } catch (error) {
        if (!error.response) {
          toast.error('خطا در اتصال به اینترنت')
        } else if (!didRequest.current) {
        //   LogoutBlacklist(refreshToken)
        //   dispatch(authActions.logout())
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (isAuthorized) {
      requestUser()
    } else {
      setShowSplashScreen(false)
    }
  }, [refreshToken])

  return showSplashScreen ? <SplashScreen /> : <>{props.children}</>
}

export default AuthProvider
