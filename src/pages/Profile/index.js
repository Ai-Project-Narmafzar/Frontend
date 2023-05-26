import React from 'react'
import {
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import { Container } from './Styles'
import { Root, Setting } from './pages'
const Profile = () => {
  const location = useLocation()

  return (
    <Container>
      <Switch>
        <Route path={`/`} element={<Root />} />
        <Route path={`/setting`} element={<Setting />} />
      </Switch>
    </Container>
  )
}

export default Profile
