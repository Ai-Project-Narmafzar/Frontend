import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { LoadingOverlay, SplashScreen } from 'components'

import styles from './styles.module.css'

import { Header } from './partials'
import { useMediaQuery } from 'hooks/useMediaQuery'

const PageLayout = ({ children, match }) => {
  const isLoading = useSelector(({ common }) => common.loading)

  const isMobile = useMediaQuery('(max-width: 1200px)')

  const location = useLocation()

  const hasHeader = () => {
    return !location.pathname.includes('/auth')
  }

  return (
    <div className={styles.container}>
      {isMobile ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1 style={{ color: 'white' }}>لطفا از نسخه دسکتاپ استفاده کنید</h1>
        </div>
      ) : (
        <Suspense fallback={<SplashScreen />}>
          {hasHeader() && <Header bgEnable={location.pathname != '/'} />}
          <div className={styles.content}>{children}</div>
        </Suspense>
      )}
    </div>
  )
}

export default PageLayout
