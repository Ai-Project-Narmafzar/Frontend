import React, { useEffect, useState } from 'react'
import { Button } from 'components'
import { Col, Row } from 'react-grid-system'
import { useQuery } from '@tanstack/react-query'

import {
  Container,
  GenerateTitle,
  MoreLink,
  PageTitle,
  SearchBarContainer,
} from './styles'
import { MoreIcon, SamplePic, SearchIcon } from 'assets/images'
import { ArtiGlowImg, FaqCollapse, PostModal } from './components'
import PostService from 'services/Post'
import Skeleton from 'react-loading-skeleton'
import { useSearchDebounce } from 'hooks/useSearchDebounce'
import { Search } from 'react-iconly'

const Home = () => {
  const [postModal, setPostModal] = useState({show: false, data: undefined})
  const [search, setSearch] = useSearchDebounce()

  const { GetPosts } = PostService()

  const { data: posts, isFetching, refetch } = useQuery({
    queryKey: ['[List] posts'],
    queryFn: () => GetPosts({ search }).then((result) => result),
    enabled: false,
  })

  useEffect(() => {
    refetch()
  }, [search])

  return (
    <Container>
      <PostModal isOpen={postModal.show} id={postModal.data} setIsOpen={setPostModal} />
      <PageTitle>
        تصاویر تولید شده توسط هوش مصنوعی را از پایگاه داده <strong>ARTI</strong>
        GLOW پیدا کنید
      </PageTitle>
      <SearchBarContainer>
        <input
          id="search-inp"
          type={'text'}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="تصویر دختر ایرانی در فضا..."
        />
        <Button
          width={'160px'}
          height={'56px'}
          onClick={() => setSearch(document.querySelector('#search-inp').value)}
        >
          جست و جو
          <Search style={{ marginRight: 7 }} />
        </Button>
      </SearchBarContainer>
      <Row gutterWidth={32}>
        {!isFetching && posts
          ? posts.map((post) => (
              <Col xs={6} md={4} lg={3}>
                <ArtiGlowImg
                  {...post}
                  setPostModal={setPostModal}
                ></ArtiGlowImg>
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
