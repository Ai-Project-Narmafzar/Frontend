import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'

import { Col, Row } from 'react-grid-system'
import { Container, NavItem, RouterContainer, SideBar } from './Styles'
import { Root } from './pages'
import { Button } from 'components'
import { HeartPrimary, LogoutIcon, SettingIcon } from 'assets/images'

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          lg={2}
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <SideBar>
            <NavItem to={'/'} className={'active'}>
              <img src={HeartPrimary} />
              <span>کالکشن من</span>
            </NavItem>
            <NavItem to={'/'}>
              <img src={SettingIcon} />
              <span>تنظیمات</span>
            </NavItem>
          </SideBar>
          <Button
            type={'secondary'}
            style={{ width: '100%', height: 50, marginTop: 15 }}
          >
            خروج
            <img src={LogoutIcon} style={{ marginRight: 16 }} />
          </Button>
        </Col>
        <Col xs={12} lg={10}>
          <RouterContainer>
            <Switch>
              <Route path={`/`} element={<Root />} />
            </Switch>
          </RouterContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
