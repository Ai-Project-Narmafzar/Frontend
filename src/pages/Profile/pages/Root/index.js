import React from 'react'
import { Button, Input } from 'components'

import { GoogleIcon } from 'assets/images'

import {
  ActionLink,
  FormContainer,
  ORSection,
  Title,
  Container,
  Desc,
} from './Styles'

const Root = () => {
  return (
    <Container>
      <FormContainer>
        <Title>تنظیمات</Title>
        <Desc>اینجا میتونی جزیات پروفایلت رو تغییر بدی</Desc>
        <div style={{ width: '100%', marginBottom: 16 }}>
          <span className='form-label'>ایمیل</span>
          <Input placeholder="mohadesemohamadzade@gmail.com" />
        </div>
        <Button width={'84px'} height={'40px'}>
          ورود
        </Button>
      </FormContainer>
    </Container>
  )
}

export default Root
