import React, { useEffect, useRef, useState } from 'react'
import { Container, ItemsContainer, LoginLink, NavItem } from './styles'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Logo, SampleAvatar } from 'assets/images'
import Colors from 'utils/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { Setting, User } from 'react-iconly'
import { Button } from 'components'
import AuthService from 'services/Auth'
import { actions as authActions } from 'store/authRedux/actions'

const Header = () => {
  const NavbarRef = useRef()
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const user = useSelector(({ auth }) => auth.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

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
              <Link to={'/home'}>
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
        {user ? (
          // <LoginLink to={'/profile'}>{user.username}</LoginLink>
          <div className="profile-row">
            <span onClick={() => setMenuOpen(!menuOpen)}>{user.username}</span>
            <img
              src={user.avatar ? user.avatar : SampleAvatar}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="menu">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="/profile/me" className="menu-item">
                    <User size={24} style={{ marginLeft: 8 }} />
                    پروفایل
                  </a>
                  <a href="/profile/setting" className="menu-item">
                    <Setting size={24} style={{ marginLeft: 8 }} />
                    تنظیمات
                  </a>
                </div>
                <Button
                  loading={loading}
                  type={'secondary'}
                  width={'100%'}
                  height={'48px'}
                  onClick={() => logoutUser()}
                >
                  خروج
                </Button>
              </div>
            )}
          </div>
        ) : (
          <LoginLink to={'/auth/login'}>ورود/ثبت نام</LoginLink>
        )}
      </div>
    </Container>
  )
}

export default Header
