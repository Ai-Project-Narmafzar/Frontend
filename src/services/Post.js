import React from 'react'
import Api from 'utils/Api'

const GET_POSTS_URL = `/posts/`

const PostService = () => {
  const GetPosts = (data) => {
    return Api.get(GET_POSTS_URL, data)
  }

  return { GetPosts }
}

export default PostService
