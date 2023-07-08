import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import LoginPage from '.'
import store, { persistor } from 'store'
import { Provider } from 'react-redux'

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, token: '12434234' },
    }),
  },
}))

test('username input should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const usernameInput = screen.queryByTestId('username-inp')
  expect(usernameInput).toBeInTheDocument()
})

test('password input should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const passwordInp = screen.queryByTestId('password-inp')
  expect(passwordInp).toBeInTheDocument()
})

test('login button should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const loginButton = screen.queryByTestId('login-btn')
  expect(loginButton).toBeInTheDocument()
})

test('form error message should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const loginButton = screen.queryByTestId('login-btn')
  fireEvent.click(loginButton)

  const errorMessage = screen.queryByTestId('form-error')

  expect(errorMessage).toBeInTheDocument()
})

test('username input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const usernameInput = screen.queryByTestId('username-inp')
  fireEvent.change(usernameInput, { target: { value: 'soroshzzz26' } })

  expect(usernameInput.value).toBe('soroshzzz26')
})

test('password input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  const passwordInput = screen.queryByTestId('password-inp')
  fireEvent.change(passwordInput, { target: { value: '123456' } })

  expect(passwordInput.value).toBe('123456')
})

test('button state loading', async () => {
  // Render Page
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  )

  act(() => {
    const usernameInput = screen.queryByTestId('username-inp')

    const passwordInput = screen.queryByTestId('password-inp')

    const loginButton = screen.queryByTestId('login-btn')

    fireEvent.change(usernameInput, {
      target: { value: 'soroshzzz26@gmail.com' },
    })
    fireEvent.change(passwordInput, { target: { value: 'sorosh123456' } })
    fireEvent.click(loginButton)

    const loadingElem = screen.queryByTestId('loading-elem')

    waitFor(() => expect(loadingElem).toBeInTheDocument())
  })
})
