import React, { useState } from 'react'
import { Button, Input } from 'components'

import { GoogleIcon, SampleAvatar } from 'assets/images'

import {
  ActionLink,
  FormContainer,
  ORSection,
  Title,
  Container,
  Desc,
} from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { Edit } from 'react-iconly'
import AuthService from 'services/Auth'
import { toast } from 'react-toastify'
import { actions as authActions } from 'store/authRedux/actions'

const Setting = () => {
  const user = useSelector(({ auth }) => auth.user)

  const dispatch = useDispatch()

  const [avatar, setAvatar] = useState()
  const [username, setUsername] = useState()
  const [loading, setLoading] = useState()

  const { UpdateUserProfile } = AuthService()

  const updateProfile = () => {
    if (avatar || username) {
      const formData = new FormData()
      avatar && formData.set('avatar', avatar)
      username && formData.set('username', username)
      setLoading(true)
      UpdateUserProfile(formData)
        .then((result) => {
          setLoading(false)
          dispatch(authActions.setUser({ ...user, ...result }))
          toast.success('تغییرات با موفقیت اعمال شد')
        })
        .catch((err) => {
          setLoading(false)
        })
    } else {
      toast.warning('تغییر ایجاد نکرده اید')
    }
  }

  console.log(username)

  return (
    <Container>
      <FormContainer>
        <Title>تنظیمات</Title>
        <Desc>اینجا میتونی جزیات پروفایلت رو تغییر بدی</Desc>
        <input
          id="avatar-inp"
          accept="image/png, image/gif, image/jpeg"
          type={'file'}
          style={{ display: 'none' }}
          multiple={false}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <div style={{ position: 'relative' }}>
          <img
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : user.avatar
                ? user.avatar
                : SampleAvatar
            }
            width="64px"
            height={'64px'}
            style={{ objectFit: 'cover', borderRadius: 32 }}
          />
          <Edit
            size={24}
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            onClick={() => document.querySelector('#avatar-inp').click()}
          />
        </div>
        <div style={{ width: '100%', marginBottom: 16 }}>
          <span className="form-label">نام کاربری</span>
          <Input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            defaultValue={user.username}
            placeholder="نام کاربری را وارد نمایید"
          />
        </div>
        <Button
          width={'84px'}
          height={'40px'}
          loading={loading}
          onClick={() => !loading && updateProfile()}
        >
          ثبت
        </Button>
      </FormContainer>
    </Container>
  )
}

export default Setting
