import React, { useState } from 'react'
import { Hide, Show } from 'react-iconly'
import { Container, CustomInput } from './styles'

const Input = ({ type, ...props }) => {
  const [secured, setSecured] = useState(true)

  return (
    <Container>
      <CustomInput
        type={type == 'password' ? (secured ? 'password' : 'text') : type}
        {...props}
      />
      {type == 'password' && (
        <div
          data-testid={'form-error'}
          className="sc-icon"
          onClick={() => setSecured(!secured)}
        >
          {secured ? <Hide size={24} /> : <Show size={24} />}
        </div>
      )}
    </Container>
  )
}

export default Input
