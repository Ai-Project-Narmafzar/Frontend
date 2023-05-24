import React, { useEffect, useRef, useState } from 'react'
import { Container, ItemsContainer, LoginLink, NavItem } from './styles'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from 'assets/images'
import Colors from 'utils/Colors'

const Header = () => {
  const NavbarRef = useRef()
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 20 && !scrolled) {
        NavbarRef.current.style.background = Colors.grey2
        NavbarRef.current.style.boxShadow = '0 4px 4px -4px rgba(0, 0, 0, 0.4)'
        NavbarRef.current.style.padding = '24px 32px'
        setScrolled(true)
      } else {
        NavbarRef.current.style.background = Colors.background
        NavbarRef.current.style.boxShadow = 'none'
        NavbarRef.current.style.padding = '32px 32px'
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container ref={NavbarRef}>
      <div className="content w-100 d-flex justify-content-between align-items-center">
        <ItemsContainer>
          <img width={126} src={Logo} style={{ marginLeft: 40 }} />
          {location.pathname != '/' && (
            <>
              <Link to={'#'}>
                <NavItem>اکسپلور</NavItem>
              </Link>
              <Link to={'/create'}>
                <NavItem>ساخت عکس جدید</NavItem>
              </Link>
              <Link to={'/faq'}>
                <NavItem>سوالات متداول</NavItem>
              </Link>
            </>
          )}
        </ItemsContainer>
        <LoginLink to={'/auth/login'}>ورود/ثبت نام</LoginLink>
      </div>
    </Container>
  )
}

export default Header
