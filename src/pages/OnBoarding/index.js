import React from 'react'
import { Container, PageTitle } from './styles'

import OnbardingPic from 'assets/images/png/onboarding.png'
import { Button } from 'components'

const OnBoarding = () => {
  return (
    <Container background={OnbardingPic}>
      <div className="content">
        <PageTitle>
          تصاویر تولید شده توسط هوش مصنوعی را از پایگاه داده{' '}
          <strong>ARTI</strong>
          GLOW پیدا کنید
        </PageTitle>
        <Button href={'/home'} width={'103px'} height={'40px'}>
          شروع
        </Button>
      </div>
    </Container>
  )
}

export default OnBoarding
