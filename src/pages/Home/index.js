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
      <GenerateTitle>تولید تصویر هوش مصنوعی آنلاین رایگان از متن</GenerateTitle>
      <GenerateContainer>
        <input
          type={'text'}
          placeholder="میخوای ببینی چطور ساخت عکس  کار میکنه؟ اول روی منو سوپرایز کن بزن و بعدش هم ساخت عکس!"
        />
        <Button width={'160px'} height={'56px'} style={{ marginLeft: 30 }}>
          جست و جو
          <img src={SearchIcon} style={{ marginRight: 7 }} />
        </Button>
        <Button type={'secondary'} width={'160px'} height={'56px'}>
          منو سوپرایز کن
        </Button>
      </GenerateContainer>
      <ImagePlaceholder>
        <img width={85} height={85} src={ImgIcon} />
        <span>تصاویر تولید شده در اینجا ظاهر می شوند!</span>
      </ImagePlaceholder>
      <div className="w-100 d-flex justify-content-center">
        <Button width={'170px'} height={'65px'}>
          دانلود عکس
          <img src={DownloadIcon} />
        </Button>
      </div>
      <FaqContainer>
        <h3 className="title">سوالات متداول</h3>
        {[1, 2, 3, 4].map(() => (
          <FaqCollapse />
        ))}
      </FaqContainer>
    </Container>
  )
}

export default Home
