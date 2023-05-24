import { DownloadIcon, ImgIcon, PenIcon, SearchIcon } from 'assets/images'
import { Button } from 'components'
import { FaqCollapse } from 'pages/Home/components'
import React from 'react'
import {
  Container,
  GenerateContainer,
  GenerateTitle,
  ImagePlaceholder,
} from './styles'

const Create = () => {
  return (
    <Container>
      <GenerateTitle>تولید تصویر هوش مصنوعی آنلاین رایگان از متن</GenerateTitle>
      <GenerateContainer>
        <input
          type={'text'}
          placeholder="میخوای ببینی چطور ساخت عکس  کار میکنه؟ اول روی منو سوپرایز کن بزن و بعدش هم ساخت عکس!"
        />
        <Button width={'160px'} height={'56px'} style={{ marginLeft: 24 }}>
          ساخت عکس
          <img width={24} src={PenIcon} style={{ marginRight: 7 }} />
        </Button>
        <Button type={'secondary'} width={'160px'} height={'56px'}>
          منو سوپرایز کن
        </Button>
      </GenerateContainer>
      <ImagePlaceholder>
        <img width={85} height={85} src={ImgIcon} />
        <span>تصاویر تولید شده در اینجا ظاهر می شوند!</span>
      </ImagePlaceholder>
      <div className="w-100 d-flex justify-content-center">
        <Button width={'162px'} height={'56px'}>
          دانلود عکس
          <img src={DownloadIcon} style={{ marginRight: 8 }} />
        </Button>
      </div>
    </Container>
  )
}

export default Create
