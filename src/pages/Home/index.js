import React from 'react'
import { Button } from 'components'
import { Col, Row } from 'react-grid-system'

import {
  ArtiGlowImg,
  Container,
  GenerateTitle,
  MoreLink,
  PageTitle,
  SearchBarContainer,
  GenerateContainer,
  ImagePlaceholder,
  FaqContainer,
} from './styles'
import {
  DownloadIcon,
  ImgIcon,
  MoreIcon,
  SamplePic,
  SearchIcon,
} from 'assets/images'
import { FaqCollapse } from './components'

const Home = () => {
  return (
    <Container>
      <PageTitle>
        تصاویر تولید شده توسط هوش مصنوعی را از پایگاه داده <strong>ARTI</strong>
        GLOW پیدا کنید
      </PageTitle>
      <SearchBarContainer>
        <input type={'text'} placeholder="تصویر دختر ایرانی در فضا..." />
        <Button width={'160px'} height={'56px'}>
          جست و جو
          <img src={SearchIcon} style={{ marginRight: 7 }} />
        </Button>
      </SearchBarContainer>
      <Row gutterWidth={32}>
        {[1, 2, 3, 4, 5, 6, 7, 8, , 1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <Col xs={6} md={4} lg={3}>
            <ArtiGlowImg src={SamplePic} />
          </Col>
        ))}
      </Row>
      <MoreLink to={'#'}>
        <img src={MoreIcon} />
        نمونه های بیشتر
      </MoreLink>
    </Container>
  )
}

export default Home
