import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import { Login, Signup } from './partials'

import { Container } from './styles'

const AuthPage = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" element={<Navigate to={'/auth/login'} />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
      </Switch>
    </Container>
  )
}

export default AuthPage
