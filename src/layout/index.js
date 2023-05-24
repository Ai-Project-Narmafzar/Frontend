import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { LoadingOverlay, SplashScreen } from 'components'

import styles from './styles.module.css'

import { Header } from './partials'

const PageLayout = ({ children, match }) => {
  const isLoading = useSelector(({ common }) => common.loading)

  const location = useLocation()

  const hasHeader = () => {
    return !location.pathname.includes('/auth') && location.pathname !== '/'
  }

  return (
    <div className={styles.container}>
      {/* {isLoading && <LoadingOverlay />} */}
      <Suspense fallback={<SplashScreen />}>
        {hasHeader() && <Header />}
        <div className={styles.content}>{children}</div>
      </Suspense>
    </div>
  )
}

export default PageLayout
