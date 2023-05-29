import React, { useEffect } from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store, { persistor } from 'store'
import { PersistGate } from 'redux-persist/integration/react'

import { AuthProvider } from 'providers'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { SkeletonTheme } from 'react-loading-skeleton'
import { ToastContainer, toast } from 'react-toastify'

import Routes from './Routes'

import { setUpInterceptorStore } from 'utils/Api'
import { SplashScreen } from 'components'

import { IconlyProvider } from 'react-iconly'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
  },
})

const App = () => {
  useEffect(() => {
    setUpInterceptorStore(store)
  }, [])

  return (
    // Redux State Management Provider
    <Provider store={store}>
      {/* Redux Persistor Gate */}
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        <BrowserRouter>
          {/* Skeleton Loading Theme Provider */}
          <SkeletonTheme borderRadius={8}>
            {/* Toast Messages Container */}
            <ToastContainer position="top-center" rtl={true} autoClose={3000} />
            {/* Query Client Provider */}
            <QueryClientProvider client={queryClient}>
              {/* Authentication Logic Provider */}
              <AuthProvider>
                <IconlyProvider primaryColor="white">
                  <Routes />
                </IconlyProvider>
              </AuthProvider>
            </QueryClientProvider>
          </SkeletonTheme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
