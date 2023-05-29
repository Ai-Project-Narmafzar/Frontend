import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { CustomButton } from './styles'

const Button = ({ children, loading, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
      {loading && (
        <div style={{ marginRight: 12 }}>
          <ClipLoader color="white" size={20} />
        </div>
      )}
    </CustomButton>
  )
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
