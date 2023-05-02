import { Button, Input } from 'components'
import React from 'react'
import {
  Container,
  FormContainer,
  FormField,
  MoreCollection,
  Title,
} from './Styles'

const Setting = () => {
  return (
    <Container>
      <Title>تنظیمات</Title>
      <MoreCollection>اینجا میتونی جزییات پروفایلتو تغییر بدی</MoreCollection>
      <FormContainer>
        <FormField style={{ marginBottom: 40 }}>
          <h4 className="title">نام کاربری</h4>
          <Input value={'سروش زمزم'} />
        </FormField>
        <FormField style={{ marginBottom: 24 }}>
          <h4 className="title">ایمیل</h4>
          <Input value={'sorosh@gmail.co,'} />
        </FormField>
        <Button  width={'100px'} height={'55px'}>ذخیره</Button>
      </FormContainer>
    </Container>
  )
}

export default Setting
