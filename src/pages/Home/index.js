import React, { useState } from 'react'
import { Button } from 'components'
import { Col, Row } from 'react-grid-system'
import { useQuery } from '@tanstack/react-query'

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
  HeartOutlinedWhiteIcon,
  ImgIcon,
  MoreIcon,
  SamplePic,
  SearchIcon,
} from 'assets/images'
import { FaqCollapse, PostModal } from './components'
import PostService from 'services/Post'
import { Heart } from 'react-iconly'
import Skeleton from 'react-loading-skeleton'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'

const Home = () => {
  const [postModal, setPostModal] = useState(false)

  const { GetPosts } = PostService()

  const { data: posts, isFetching, refetch } = useQuery({
    queryKey: ['[List] posts'],
    queryFn: () => GetPosts().then((result) => result),
  })

  return (
    <Container>
      <PostModal isOpen={postModal} setIsOpen={setPostModal} />
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
        {!isFetching && posts
          ? posts.map(({ id, image, description, owner, likes_count }) => (
              <Col xs={6} md={4} lg={3}>
                <ArtiGlowImg
                  src={image}
                  onClick={() => setPostModal({ show: true, data: id })}
                >
                  <div className="content">
                    <h6 className="title">{description}</h6>
                    <span className="name">{owner.username}</span>
                    <div className="like-con">
                      <Heart style={{ marginLeft: 4 }} />
                      {likes_count}
                    </div>
                  </div>
                </ArtiGlowImg>
              </Col>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <Col xs={6} md={4} lg={3}>
                <Skeleton
                  width={'100%'}
                  style={{ aspectRatio: '1 / 1', marginBottom: 32 }}
                />
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
