import React from 'react'
import Api from 'utils/Api'

const GET_POSTS_URL = `/posts/`
const TOGGLE_LIKE_POST_URL = (id) => `/posts/${id}/like/`

const PostService = () => {
  const GetPosts = (data) => {
    return Api.get(GET_POSTS_URL, data)
  }

  const ToggleLikePost = (id) => {
    return Api.post(TOGGLE_LIKE_POST_URL(id))
  }

  return { GetPosts, ToggleLikePost }
}

export default PostService
