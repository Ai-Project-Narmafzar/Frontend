import {
  CloseIcon,
  DownloadIcon,
  HeartIcon,
  LinkIcon,
  PlusIcon,
  SampleAvatar,
  SamplePic,
} from 'assets/images'
import { Button, Modal } from 'components'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RWebShare } from 'react-web-share'

import { Container } from './Styles'

import { useQuery } from '@tanstack/react-query'
import PostService from 'services/Post'
import { Download, Heart } from 'react-iconly'
import Colors from 'utils/Colors'

import { useSelector } from 'react-redux'

const PostModal = ({ id, isOpen, setIsOpen }) => {
  const {
    GetSinglePost,
    ToggleLikePost,
    GetPostComments,
    FollowUser,
    SendComment,
  } = PostService()

  const navigate = useNavigate()

  const isAuthorized = useSelector(({ auth }) => auth.token)
  const user = useSelector(({ auth }) => auth.user)

  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [followLoading, setFollowLoading] = useState(false)
  const [commentLoading, setCommentLoading] = useState(false)
  const [comment, setComment] = useState('')
  const [followed, setFollowed] = useState(false)

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

  const toggleFollow = () => {
    setFollowLoading(true)
    FollowUser(post.owner.id)
      .then((result) => {
        setFollowLoading(false)
        setFollowed(!followed)
      })
      .catch((err) => {
        setFollowLoading(false)
      })
  }

  const sendComment = () => {
    setCommentLoading(true)
    SendComment(id, { description: comment })
      .then((result) => {
        setCommentLoading(false)
        toast.success('کامنت با موفقیت ارسال شد')
        refetchComment()
      })
      .catch((err) => {
        setCommentLoading(false)
        toast.error('خطا در ارسال کامنت')
      })
  }

  useEffect(() => {
    if (id) {
      refetch()
      refetchComment()
    }
  }, [id])

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
                  <Button
                    width={'140px'}
                    height={'48px'}
                    loading={followLoading}
                    onClick={() =>
                      user && user.id != post.owner.id
                        ? navigate('/auth/login')
                        : !loading && toggleFollow()
                    }
                  >
                    {followed ? 'دنبال میکنید' : 'دنبال کردن'}
                    <img src={PlusIcon} />
                  </Button>

                  <h6 className="name">{post?.owner?.username}</h6>
                  <img
                    className="avatar"
                    src={post.owner.avatar ? post.owner.avatar : SampleAvatar}
                  />
                </div>
              </div>
              <div className="content d-flex flex-column flex-grow-1">
                <p className="desc">{post?.description}</p>
                <div className="d-flex flex-column">
                  {(isAuthorized || comments.length > 0) && (
                    <h4 className="comment-title">کامنت</h4>
                  )}
                  {isAuthorized && (
                    <>
                      <textarea
                        rows={4}
                        className={'comment-inp'}
                        placeholder={'نظر خود را وارد نمایید'}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          margin: "16px 0",
                        }}
                      >
                        <Button
                          loading={commentLoading}
                          width={'132px'}
                          onClick={() => {
                            if (comment.length > 3) {
                              sendComment()
                            } else {
                              toast.warning('حداقل 3 کاراکتر وارد نمایید')
                            }
                          }}
                        >
                          ارسال نظر
                        </Button>
                      </div>
                    </>
                  )}
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
                  <Heart
                    style={{ marginLeft: 4 }}
                    size={32}
                    filled={liked}
                    primaryColor={liked ? Colors.primary : 'white'}
                    onClick={(e) => {
                      if (isAuthorized) {
                        e.stopPropagation()
                        toggleLike()
                      } else {
                        navigate('/auth/login')
                      }
                    }}
                  />
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    className="action-item"
                    onClick={() => window.open(post?.image)}
                  >
                    دانلود
                    <Download style={{ marginRight: 8 }} />
                  </div>
                  <RWebShare
                    data={{
                      text: 'Image Generated By Artiglow',
                      url: post?.image,
                      title: post?.description,
                    }}
                    onClick={() => toast.success('با موفقیت اشتراک گذاری شد')}
                  >
                    <div className="action-item" style={{ marginRight: 32 }}>
                      اشتراک
                      <img src={LinkIcon} style={{ marginRight: 8 }} />
                    </div>
                  </RWebShare>
                </div>
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
