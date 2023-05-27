import React from 'react'

import ReactModal from 'react-modal'

import styles from './styles.module.css'

ReactModal.setAppElement('#root')
const Modal = ({
  isOpen,
  setIsOpen,
  children,
  shouldCloseOnOverlayClick = true,
}) => {
  const customStyles = {
    overlay: {
      zIndex: 101,
      background: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      maxHeight: '90%',
      overflowY: 'scroll',
    },
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={customStyles}
      className={styles.modal}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
