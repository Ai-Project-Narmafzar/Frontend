import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
const Profile = lazy(() => import('./pages/Profile'))
const OnBoarding = lazy(() => import('./pages/OnBoarding'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Create = lazy(() => import('./pages/Create'))

const Routes = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const isAuthorized = useSelector(({ auth }) => auth.token)

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
        {isAuthorized ? (
          <>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="*" element={<Navigate to={'/home'} replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/auth/*" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Navigate to={'/'} replace />} />
          </>
        )}
      </Switch>
    </PageLayout>
  )
}

export default Routes
