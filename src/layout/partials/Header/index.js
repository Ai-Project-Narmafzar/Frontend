import React from 'react'
import { Container, ItemsContainer, LoginLink, NavItem } from './styles'
import { Link } from 'react-router-dom'

import { Logo } from 'assets/images'

const Header = () => {
  return (
    <Container>
      <ItemsContainer>
        <img src={Logo} style={{ marginLeft: 40 }} />
        <Link to={'#'}>
          <NavItem>اکسپلور</NavItem>
        </Link>
        <Link to={'#'}>
          <NavItem>ساخت عکس جدید</NavItem>
        </Link>
        <Link to={'#'}>
          <NavItem>سوالات متداول</NavItem>
        </Link>
      </ItemsContainer>
      <LoginLink to={'/auth'}>ورود/ثبت نام</LoginLink>
    </Container>
  )
}

export default Header
