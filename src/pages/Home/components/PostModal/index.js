import {
  CloseIcon,
  HeartIcon,
  PlusIcon,
  SampleAvatar,
  SamplePic,
} from 'assets/images'
import { Button, Modal } from 'components'
import React from 'react'
import { Col, Row } from 'react-grid-system'
import { Container } from './Styles'

const PostModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Row gutterWidth={29} style={{ height: '100%' }}>
          <Col xs={7} className="d-flex flex-column">
            <div className="header">
              <img src={CloseIcon} onClick={() => setIsOpen(false)} />
              <div className="d-flex align-items-center">
                <Button width={'140px'} height={'48px'}>
                  دنبال کردن
                  <img src={PlusIcon} />
                </Button>
                <h6 className="name">مریم اکبر زاده</h6>
                <img className="avatar" src={SampleAvatar} />
              </div>
            </div>
            <div className="content d-flex flex-column flex-grow-1">
              <p className="desc">
                طبیعت زیبا کوه و خورشید ب رنگ نارنجی طبیعت زیبا کوه و خورشید ب
                رنگ نارنجیطبیعت زیبا کوه و خورشید ب رنگ نارنجی طبیعت زیبا کوه و
                خورشید ب رنگ نارنجی طبیعت زیبا کوه و خورشید ب رنگ نارنجی طبیعت
                زیبا کوه و خورشید ب رنگ نارنجیطبیعت زیبا کوه و خورشید ب رنگ
                نارنجی طبیعت زیبا کوه و خورشید ب رنگ نارنجی
              </p>
              <div className="d-flex flex-column">
                <h4 className="comment-title">کامنت</h4>
                {[1, 2, 3].map(() => (
                  <div className="comment-card">
                    <img id="avatar" src={SampleAvatar} />
                    <div className='d-flex flex-column'>
                      <h4 id='name'>سروش</h4>
                      <p id='comment'>خیلی جالب بود عکسش</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer">
              <img src={HeartIcon} />
            </div>
          </Col>
          <Col xs={5}>
            <img className="modal-img" src={SamplePic} />
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

export default PostModal
