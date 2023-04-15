import React, { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import PageLayout from 'layout'
import { PrivateRoute } from 'components'

const Home = lazy(() => import('./pages/Home'))
const AuthPage = lazy(() => import('./pages/Auth'))

const Routes = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      const body = document.querySelector('#root')
      body.scrollIntoView(
        {
          behavior: 'smooth',
        },
        500,
      )
    }, 100)
  }, [location.pathname])

  return (
    <PageLayout>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<AuthPage />} />
        {/* <Route
            path="/profile/*"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          /> */}
        <Route path="*" element={<Navigate to={'/auth'} replace />} />
      </Switch>
    </PageLayout>
  )
}

export default Routes
