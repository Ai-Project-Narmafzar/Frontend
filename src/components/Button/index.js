import React from 'react'
import { CustomButton } from './styles'

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
