import React, { useState } from 'react'
import { Container } from './styles'
import { Heart } from 'react-iconly'
import Colors from 'utils/Colors'
import PostService from 'services/Post'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSelector } from 'react-redux'

const ArtiGlowImg = ({
  id,
  image,
  description,
  owner,
  likes_count,
  is_liked,
  setPostModal,
}) => {
  const { ToggleLikePost } = PostService()

  const isAuthorized = useSelector(({ auth }) => auth.token)

  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState(is_liked)
  const [likesCount, setLikesCount] = useState(likes_count)

  const toggleLike = () => {
    setLoading(true)
    ToggleLikePost(id)
      .then((result) => {
        setLoading(false)
        liked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1)
        setLiked(!liked)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <Container
      src={image}
      onClick={() => setPostModal({ show: true, data: id })}
    >
      <div className="content">
        <h6 className="title">{description}</h6>
        <span className="name">{owner.username}</span>
        <div className="like-con">
          {loading ? (
            <ClipLoader color="white" size={20} />
          ) : (
            <Heart
              style={{ marginLeft: 4 }}
              filled={liked}
              primaryColor={liked ? Colors.primary : 'white'}
              onClick={(e) => {
                if (isAuthorized) {
                  e.stopPropagation()
                  toggleLike()
                }
              }}
            />
          )}
          {likesCount}
        </div>
      </div>
    </Container>
  )
}

export default ArtiGlowImg
