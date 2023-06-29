import React, { useEffect } from 'react'

import {
  GoogleIcon,
  HeartOutlinedWhiteIcon,
  SamplePic,
  SelectPicIcon,
} from 'assets/images'

import { Container, Desc, Divider } from './Styles'
import { Col, Row } from 'react-grid-system'
import { ArtiGlowImg } from 'pages/Home/styles'
import AuthService from 'services/Auth'
import { actions as authActions } from 'store/authRedux/actions'

import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'

const Root = () => {
  const user = useSelector(({ auth }) => auth.user)

  const dispatch = useDispatch()

  const { GetUserProfile } = AuthService()

  useEffect(() => {
    GetUserProfile(user.id)
      .then((result) => {
        dispatch(authActions.setUser(result))
      })
      .catch((err) => {})
  }, [user])
  return (
    <Container>
      <h4 className="name-title">{user.username}</h4>
      <Divider width={'368px'} style={{ marginBottom: 27 }}></Divider>
      <div className="tabs-con" style={{ maxWidth: 398, marginBottom: 20 }}>
        <div className="info-col">
          <h6>230</h6>
          <span>لایک ها</span>
        </div>
        <div className="info-col">
          <h6>230</h6>
          <span>لایک ها</span>
        </div>
        <div className="info-col">
          <h6>230</h6>
          <span>لایک ها</span>
        </div>
      </div>
      <Divider width={'570px'} style={{ marginBottom: 37 }}></Divider>
      <div className="tabs-con">
        <div className="tab">
          عکس های موردعلاقه
          <img src={HeartOutlinedWhiteIcon} style={{ marginRight: 8 }} />
        </div>
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
        {[1, 2, 3, 4, 5, 6, 7, 8, , 1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <Col xs={6} md={4} lg={3}>
            <ArtiGlowImg src={SamplePic}>
              <div className="content">
                <h6 className="title">دختر چشم آبی</h6>
                <span className="name">سارا نامدار</span>
                <div className="like-con">
                  <img src={HeartOutlinedWhiteIcon} style={{ marginLeft: 4 }} />
                  56
                </div>
              </div>
            </ArtiGlowImg>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Root
