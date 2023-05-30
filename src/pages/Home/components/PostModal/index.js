import {
  CloseIcon,
  HeartIcon,
  PlusIcon,
  SampleAvatar,
  SamplePic,
} from 'assets/images'
import { Button, Modal } from 'components'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import ClipLoader from 'react-spinners/ClipLoader'

import { Container } from './Styles'

import { useQuery } from '@tanstack/react-query'
import PostService from 'services/Post'
import { Heart } from 'react-iconly'
import Colors from 'utils/Colors'
import { useSelector } from 'react-redux'

const PostModal = ({ id, isOpen, setIsOpen }) => {
  const { GetSinglePost, ToggleLikePost, GetPostComments } = PostService()

  const isAuthorized = useSelector(({ auth }) => auth.token)

  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const { data: post, isFetching, refetch } = useQuery({
    queryKey: [`[Single] post-${id}`],
    queryFn: () => GetSinglePost(id).then((result) => result),
    enabled: false,
  })

  const { data: comments, refetch: refetchComment } = useQuery({
    queryKey: [`[Single] comments-${id}`],
    queryFn: () => GetPostComments(id).then((result) => result),
    enabled: false,
  })

  const toggleLike = () => {
    setLoading(true)
    ToggleLikePost(id)
      .then((result) => {
        setLoading(false)
        setLiked(!liked)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  useEffect(() => {
    if (id) {
      refetch()
      refetchComment()
    }
  }, [id])

  console.log(comments)

  useEffect(() => {
    post && setLiked(post.liked)
  }, [post])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {!isFetching && post ? (
          <Row gutterWidth={29} style={{ height: '100%' }}>
            <Col xs={7} className="d-flex flex-column">
              <div className="header">
                <img src={CloseIcon} onClick={() => setIsOpen(false)} />
                <div className="d-flex align-items-center">
                  <Button width={'140px'} height={'48px'}>
                    دنبال کردن
                    <img src={PlusIcon} />
                  </Button>
                  <h6 className="name">{post?.owner?.username}</h6>
                  <img className="avatar" src={SampleAvatar} />
                </div>
              </div>
              <div className="content d-flex flex-column flex-grow-1">
                <p className="desc">{post?.description}</p>
                <div className="d-flex flex-column">
                  <h4 className="comment-title">کامنت</h4>
                  {comments &&
                    comments.map((comment) => (
                      <div className="comment-card">
                        <img id="avatar" src={SampleAvatar} />
                        <div className="d-flex flex-column">
                          <h4 id="name">{comment?.owner?.username}</h4>
                          <p id="comment">{comment?.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="footer">
                {loading ? (
                  <ClipLoader color="white" size={32} />
                ) : (
                  isAuthorized && (
                    <Heart
                      style={{ marginLeft: 4 }}
                      size={32}
                      filled={liked}
                      primaryColor={liked ? Colors.primary : 'white'}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike()
                      }}
                    />
                  )
                )}
              </div>
            </Col>
            <Col xs={5}>
              <img className="modal-img" src={post?.image} />
            </Col>
          </Row>
        ) : (
          <div className="w-100 h-100 d-flex flex-center">
            <ClipLoader color="white" size={75} />
          </div>
        )}
      </Container>
    </Modal>
  )
}

export default PostModal
