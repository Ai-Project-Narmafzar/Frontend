import React from 'react'
import { Button } from 'components'

import { Container, PageTitle, SearchBarContainer } from './styles'
import { SearchIcon } from 'assets/images'

const Home = () => {
  return (
    <Container>
      <PageTitle>
        تصاویر تولید شده توسط هوش مصنوعی را از پایگاه داده <strong>ARTI</strong>
        GLOW پیدا کنید
      </PageTitle>
      <SearchBarContainer>
        <input type={'text'} placeholder="تصویر دختر ایرانی در فضا..." />
        <Button style={{ width: 176, height: 65 }}>
          جست و جو
          <img src={SearchIcon} />
        </Button>
      </SearchBarContainer>
    </Container>
  )
}

export default Home
