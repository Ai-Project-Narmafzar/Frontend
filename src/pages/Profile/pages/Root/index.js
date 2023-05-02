import React from 'react'
import { Container, MoreCollection, Title } from './Styles'

const Root = () => {
  return (
    <Container>
      <Title>کالکشن من</Title>
      <MoreCollection>
        اینجا میتونی عکس های مورد علاقت رو دانلود بکنی.
        <strong>دانلود همه</strong>
      </MoreCollection>
    </Container>
  )
}

export default Root
