import { FaqCollapse } from 'pages/Home/components'
import React from 'react'
import { Container } from './styles'

const FAQ = () => {
  return (
    <Container>
      <h3 className="title">سوالات متداول</h3>
      {[1, 2, 3, 4].map(() => (
        <FaqCollapse />
      ))}
    </Container>
  )
}

export default FAQ
