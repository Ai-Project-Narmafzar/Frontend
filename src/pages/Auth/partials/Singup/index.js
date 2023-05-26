import React from 'react'
import { Button, Input } from 'components'

import { GoogleIcon } from 'assets/images'

import { ActionLink, FormContainer, ORSection, Title } from '../../styles'

const Signup = () => {
  return (
    <FormContainer>
      <Title>اکانت خود را بسازید</Title>
      <div style={{ width: '100%', marginBottom: 40 }}>
        <Button type={'secondary'} height={'56px'}>
          <img src={GoogleIcon} />
          ادامه با اکانت گوگل
        </Button>
      </div>
      <ORSection>
        <div></div>
        <span>یا</span>
        <div></div>
      </ORSection>
      <div style={{ width: '100%', marginBottom: 16 }}>
        <Input placeholder="ایمیل" />
      </div>
      <div style={{ width: '100%' }}>
        <Input placeholder="رمز" />
      </div>
      <div style={{ margin: '8px 0 24px 0', width: '100%' }}></div>
      <div style={{ width: '100%' }}>
        <Button>ثبت نام</Button>
      </div>
      <div style={{ marginTop: 8, width: '100%' }}>
        <ActionLink href="/auth/signup">
          حساب کاربری دارید؟ <strong>ورود به حساب کاربری</strong>
        </ActionLink>
      </div>
    </FormContainer>
  )
}

export default Signup
