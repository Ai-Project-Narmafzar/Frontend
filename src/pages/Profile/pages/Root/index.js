import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  GoogleIcon,
  HeartOutlinedWhiteIcon,
  SamplePic,
  SelectPicIcon,
} from 'assets/images'

import { Container, Desc, Divider } from './Styles'
import { Col, Row } from 'react-grid-system'

import { ArtiGlowImg, PostModal } from 'pages/Home/components'

import AuthService from 'services/Auth'
import PostService from 'services/Post'

import { actions as authActions } from 'store/authRedux/actions'
import { useQuery } from '@tanstack/react-query'

import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { ClipLoader } from 'react-spinners'

const Root = () => {
  const user = useSelector(({ auth }) => auth.user)

  const dispatch = useDispatch()
  const { id } = useParams()

  const { GetUserProfile } = AuthService()
  const { GetPosts } = PostService()

  const [userToShow, setUserToShow] = useState()

  const { data: posts, isFetching, refetch } = useQuery({
    queryKey: ['[List] posts'],
    queryFn: () => GetPosts({ owner: user.id }).then((result) => result),
    enabled: false,
  })

  const [postModal, setPostModal] = useState(false)

  useEffect(() => {
    GetUserProfile(id ? id : user.id, { remove_token: true })
      .then((result) => {
        dispatch(authActions.setUser(result))
        setUserToShow(result)
        refetch()
      })
      .catch((err) => {})
  }, [dispatch])

  if (userToShow) {
    return (
      <Container>
        <PostModal
          isOpen={postModal.show}
          id={postModal.data}
          setIsOpen={setPostModal}
        />
        <h4 className="name-title">{user.username}</h4>
        <Divider width={'368px'} style={{ marginBottom: 27 }}></Divider>
        <div className="tabs-con" style={{ maxWidth: 398, marginBottom: 20 }}>
          <div className="info-col">
            <h6>{user?.followers_count}</h6>
            <span>دنبال کننده</span>
          </div>
          <div className="info-col">
            <h6>{user?.following_count}</h6>
            <span>دنبال میکند</span>
          </div>
        </div>
        <Divider width={'570px'} style={{ marginBottom: 37 }}></Divider>
        <div className="tabs-con" style={{ justifyContent: 'center' }}>
          {/* <div className="tab">
          عکس های موردعلاقه
          <img src={HeartOutlinedWhiteIcon} style={{ marginRight: 8 }} />
        </div> */}
          <div className="tab active">
            عکس های من
            <img
              src={SelectPicIcon}
              style={{ marginRight: 8 }}
              width={24}
              height={24}
            />
          </div>
        </div>
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
      </Container>
    )
  } else {
    return (
      <Container>
        <div className="w-100 h-100 d-flex flex-center">
          <ClipLoader color="white" size={75} />
        </div>
      </Container>
    )
  }
}

export default Root
