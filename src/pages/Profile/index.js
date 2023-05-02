import React from 'react'
import {
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import { Col, Row } from 'react-grid-system'
import { Container, NavItem, RouterContainer, SideBar } from './Styles'
import { Root, Setting } from './pages'
import { Button } from 'components'
import {
  HeartIcon,
  HeartPrimary,
  LogoutIcon,
  SettingIcon,
  SettingPrimary,
} from 'assets/images'

const Profile = () => {
  const location = useLocation()

  return (
    <Container>
      <Row gutterWidth={24}>
        <Col
          xs={12}
          lg={2}
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <SideBar>
            <NavItem
              to={'/profile'}
              className={location.pathname == '/profile' ? 'active' : ''}
            >
              <img
                src={location.pathname == '/profile' ? HeartPrimary : HeartIcon}
              />
              <span>کالکشن من</span>
            </NavItem>
            <NavItem
              to={'/profile/setting'}
              className={location.pathname.includes('/setting') ? 'active' : ''}
            >
              <img
                src={
                  location.pathname.includes('/setting')
                    ? SettingPrimary
                    : SettingIcon
                }
              />
              <span>تنظیمات</span>
            </NavItem>
          </SideBar>
          <Button
            type={'secondary'}
            width={'100%'} height={'50px'}
            style={{ marginTop: 15 }}
          >
            خروج
            <img src={LogoutIcon} style={{ marginRight: 16 }} />
          </Button>
        </Col>
        <Col xs={12} lg={10}>
          <RouterContainer>
            <Switch>
              <Route path={`/`} element={<Root />} />
              <Route path={`/setting`} element={<Setting />} />
            </Switch>
          </RouterContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
