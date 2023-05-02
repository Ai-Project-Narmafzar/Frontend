import React from 'react'
import { Container, MoreCollection, NoMedia, Title } from './Styles'

import { EditIcon, SelectPicIcon } from 'assets/images'
import { Button } from 'components'

const Root = () => {
  return (
    <Container>
      <Title>کالکشن من</Title>
      <MoreCollection>
        اینجا میتونی عکس های مورد علاقت رو دانلود بکنی.
        <strong>دانلود همه</strong>
      </MoreCollection>
      <NoMedia>
        <img src={SelectPicIcon} />
        <span>هنوز عکسی ذخیره نشده</span>
        <Button width={'170px'} height={'59px'} style={{ borderRadius: 18 }}>
          ساخت عکس
          <img src={EditIcon} style={{ marginRight: 5 }} />
        </Button>
      </NoMedia>
    </Container>
  )
}

export default Root
