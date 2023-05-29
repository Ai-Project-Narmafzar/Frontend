import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { CustomButton } from './styles'

const Button = ({ children, loading, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
      {loading && (
        <ClipLoader color="white" size={20} style={{ marginRight: 12 }} />
      )}
    </CustomButton>
  )
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
