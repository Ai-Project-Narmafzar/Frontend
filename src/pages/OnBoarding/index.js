import React from 'react'
import { Container, PageTitle } from './styles'

import OnbardingPic from 'assets/images/png/onboarding.webp'
import { Button } from 'components'

const OnBoarding = () => {
  return (
    <Container background={OnbardingPic}>
      <div className="content">
        <PageTitle>
        هر تصویری که دوست داریو با کمک {' '}
          <strong>ARTI</strong>
          GLOW خلق کن
        </PageTitle>
        <Button href={'/home'} width={'103px'} height={'40px'}>
          شروع
        </Button>
      </div>
    </Container>
  )
}

export default OnBoarding
