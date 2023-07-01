import { DownloadIcon, ImgIcon, PenIcon, SearchIcon } from 'assets/images'
import { Button } from 'components'
import { FaqCollapse } from 'pages/Home/components'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PostService from 'services/Post'
import {
  Container,
  GenerateContainer,
  GenerateTitle,
  ImagePlaceholder,
} from './styles'
import {} from 'react-iconly'

const Create = () => {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)

  const { GeneratePost } = PostService()

  const generatePost = () => {
    if (prompt.length > 6) {
      setLoading(true)
      GeneratePost({ description: prompt })
        .then((result) => {
          toast.success('عکس با موفقیت ساخته شد')
          setLoading(false)
          setResult(result)
        })
        .catch((err) => {
          setLoading(false)
        })
    } else {
      toast.warn('حداقل 6 کاراکتر وارد نمایید')
    }
  }

  return (
    <Container>
      <GenerateTitle>تولید تصویر هوش مصنوعی آنلاین رایگان از متن</GenerateTitle>
      <GenerateContainer>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type={'text'}
          placeholder="میخوای ببینی چطور ساخت عکس  کار میکنه؟ اول روی منو سوپرایز کن بزن و بعدش هم ساخت عکس!"
        />
        <Button
          width={'200px'}
          height={'56px'}
          loading={loading}
          onClick={() => !loading && generatePost()}
        >
          ساخت عکس
          <img width={24} src={PenIcon} style={{ marginRight: 7 }} />
        </Button>
        {/* <Button type={'secondary'} width={'160px'} height={'56px'}>
  ایز کن
        </Button>        منو سوپر */}
      </GenerateContainer>
      <ImagePlaceholder src={result?.image}>
        {!result && (
          <>
            <img width={85} height={85} src={ImgIcon} />
            <span>تصاویر تولید شده در اینجا ظاهر می شوند!</span>
          </>
        )}
      </ImagePlaceholder>
      <div className="w-100 d-flex justify-content-center">
        <Button
          width={'162px'}
          height={'56px'}
          onClick={() => {
            setPrompt('')
            setResult()
          }}
        >
          ریست
        </Button>
      </div>
    </Container>
  )
}

export default Create
