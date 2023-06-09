import React from 'react'
import Api from 'utils/Api'

const GET_POSTS_URL = `/posts/`
const TOGGLE_LIKE_POST_URL = (id) => `/posts/${id}/like/`
const GET_SINGLE_POST_URL = (id) => `/posts/${id}/`
const GET_POST_COMMNENTS_URL = (id) => `/posts/${id}/comments/`
const FOLLOW_USER_URL = (id) => `/follow/${id}/`
const DELETE_COMMENT_URL = (post, id) => `/posts/${post}/comments/${id}/`

const PostService = () => {
  const GetPosts = (params) => {
    return Api.get(GET_POSTS_URL, { params })
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

  const GeneratePost = (data) => {
    return Api.post(GET_POSTS_URL, data)
  }

  const FollowUser = (id) => {
    return Api.post(FOLLOW_USER_URL(id))
  }

  const SendComment = (id, data) => {
    return Api.post(GET_POST_COMMNENTS_URL(id), data)
  }

  const DeletePost = (id) => {
    return Api.delete(GET_SINGLE_POST_URL(id))
  }

  const DeleteComment = (post, id) => {
    return Api.delete(DELETE_COMMENT_URL(post, id))
  }

  return {
    GetPosts,
    ToggleLikePost,
    GetSinglePost,
    GetPostComments,
    GeneratePost,
    FollowUser,
    SendComment,
    DeletePost,
    DeleteComment,
  }
}

export default PostService
