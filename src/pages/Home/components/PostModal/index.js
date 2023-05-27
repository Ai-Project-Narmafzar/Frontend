import { Modal } from 'components'
import React from 'react'

const PostModal = ({ isOpen, setIsOpen }) => {
  return <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
}

export default PostModal
