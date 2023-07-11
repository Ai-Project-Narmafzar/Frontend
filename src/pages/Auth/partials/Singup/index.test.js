import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import SignUpPage from '.'
import store, { persistor } from 'store'
import { Provider } from 'react-redux'
import { pass } from './constant'

test('username input should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const usernameInput = screen.queryByTestId('username-inp')
  expect(usernameInput).toBeInTheDocument()
})

test('password input should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const passwordInp = screen.queryByTestId('password-inp')
  expect(passwordInp).toBeInTheDocument()
})

test('login button should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const signupButton = screen.queryByTestId('signup-btn')
  expect(signupButton).toBeInTheDocument()
})

test('form error message should be rendered', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const signupButton = screen.queryByTestId('signup-btn')
  fireEvent.click(signupButton)

  const errorMessage = screen.queryAllByTestId('form-error')

  expect(errorMessage).not.toBeNull()
})

test('username input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const usernameInput = screen.queryByTestId('username-inp')
  fireEvent.change(usernameInput, { target: { value: 'soroshzzz26' } })

  expect(usernameInput.value).toBe('soroshzzz26')
})

test('email input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const usernameInput = screen.queryByTestId('email-inp')
  fireEvent.change(usernameInput, { target: { value: 'soroshzzz26' } })

  expect(usernameInput.value).toBe('soroshzzz26')
})

test('password input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const passwordInput = screen.queryByTestId('password-inp')
  fireEvent.change(passwordInput, { target: { value: '123456' } })

  expect(passwordInput.value).toBe('123456')
})

test('confirm input should change', () => {
  // Render Page
  render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  )

  const passwordInput = screen.queryByTestId('confirm-inp')
  fireEvent.change(passwordInput, { target: { value: '123456' } })

  expect(passwordInput.value).toBe('123456')
})