import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'

import { LoadingOverlay, SplashScreen } from 'components'

import styles from './styles.module.css'

const PageLayout = ({ children, match }) => {
  const isLoading = useSelector(({ common }) => common.loading)

  return (
    <div className={styles.container}>
      {isLoading && <LoadingOverlay />}
      <Suspense fallback={<SplashScreen />}>
        <div
          className={styles.content}
        >
          {children}
        </div>
      </Suspense>
    </div>
  )
}

export default PageLayout
