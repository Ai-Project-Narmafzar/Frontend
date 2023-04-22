import React, { useState } from 'react'
import { Container } from './styles'
import { Collapse } from 'react-collapse'

import { ChevronDownIcon, ChevronUpIcon } from 'assets/images'

const FaqCollapse = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Container>
      <div
        className={`header ${isOpened ? 'open' : ''}`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <img
          src={isOpened ? ChevronUpIcon : ChevronDownIcon}
          style={{ marginLeft: 22 }}
        />
        {question}
      </div>
      <Collapse isOpened={isOpened}>
        <div className="body">{answer}</div>
      </Collapse>
    </Container>
  )
}

FaqCollapse.defaultProps = {
  question: 'آیا راهنمایی برای ایجاد تصاویر بهتر دارید؟',
  answer:
    'بله، ما دائماً در حال کار بر روی بهبود کیفیت تصویر هستیم و انتظار داریم در آینده بتوانیم تصاویر دقیق تری ارائه دهیم.',
}

export default FaqCollapse
