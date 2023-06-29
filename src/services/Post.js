import React from 'react'
import Api from 'utils/Api'

const GET_POSTS_URL = `/posts/`
const TOGGLE_LIKE_POST_URL = (id) => `/posts/${id}/like/`
const GET_SINGLE_POST_URL = (id) => `/posts/${id}/`
const GET_POST_COMMNENTS_URL = (id) => `/posts/${id}/comments/`

const PostService = () => {
  const GetPosts = (params) => {
    return Api.get(GET_POSTS_URL, {
      params: { ...params, remove_token: true },
    })
  }

  const ToggleLikePost = (id) => {
    return Api.post(TOGGLE_LIKE_POST_URL(id))
  }

  const GetSinglePost = (id) => {
    return Api.get(GET_SINGLE_POST_URL(id))
  }

  const GetPostComments = (id) => {
    return Api.get(GET_POST_COMMNENTS_URL(id))
  }

  return { GetPosts, ToggleLikePost, GetSinglePost, GetPostComments }
}

export default PostService
