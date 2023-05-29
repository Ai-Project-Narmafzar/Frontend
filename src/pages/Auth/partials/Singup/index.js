import React, { useState } from 'react'
import { Button, Input } from 'components'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import AuthService from 'services/Auth'

import { ActionLink, FormContainer, ORSection, Title } from '../../styles'

import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { actions as authActions } from 'store/authRedux/actions'

const initialValues = {
  username: undefined,
  email: undefined,
  password: undefined,
  confirm: undefined,
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(5, 'رمزعبور باید حداقل 5 کاراکتر باشد')
    .required('این فیلد الزامی است'),
  email: Yup.string()
    .email('لطفا یک ایمیل معتبر وارد نمایید')
    .required('این فیلد الزامی است'),
  password: Yup.string()
    .required('این فیلد الزامی است')
    .matches(
      /^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x]).*$/,
      'باید شامل عدد، یک کاراکتر بزرگ و یک حرف خاص مانند @#*!... باشد.',
    ),
  confirm: Yup.string()
    .required('این فیلد الزامی است')
    .oneOf([Yup.ref('password'), null], 'رمز های عبور یکسان نیست'),
})

const Signup = () => {
  const { Register } = AuthService()

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const signUpUser = (values) => {
    setLoading(true)
    Register(values)
      .then((result) => {
        setLoading(false)
        dispatch(authActions.login(result))
        toast.success('ثبت نام با موفقیت انجام شد')
      })
      .catch((err) => {
        setLoading(false)
        if (err.response.data.username) {
          toast.error('کاربر با این نام کاربری قبلا ثبت نام کرده است')
        }
        if (err.response.data.email) {
          toast.error('کاربر با این ایمیل قبلا ثبت نام کرده است')
        }
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: signUpUser,
    validateOnChange: false,
  })

  return (
    <FormContainer>
      <Title>حساب خود را بسازید</Title>
      <div style={{ width: '100%', marginBottom: 16 }}>
        <Input
          placeholder="ایمیل"
          onChange={(e) => formik.setFieldValue('email', e.target.value)}
          onBlur={() => formik.setFieldTouched('email', true)}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="form-error">{formik.errors.email}</span>
        ) : null}
      </div>
      <div style={{ width: '100%', marginBottom: 16 }}>
        <Input
          placeholder="نام کاربری"
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
          onBlur={() => formik.setFieldTouched('username', true)}
        />
        {formik.touched.username && formik.errors.username ? (
          <span className="form-error">{formik.errors.username}</span>
        ) : null}
      </div>
      <div style={{ width: '100%', marginBottom: 16 }}>
        <Input
          type={'password'}
          placeholder="رمزعبور"
          onChange={(e) => formik.setFieldValue('password', e.target.value)}
          onBlur={() => formik.setFieldTouched('password', true)}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="form-error">{formik.errors.password}</span>
        ) : null}
      </div>
      <div style={{ width: '100%' }}>
        <Input
          type={'password'}
          placeholder="تکرار رمزعبور"
          onChange={(e) => formik.setFieldValue('confirm', e.target.value)}
          onBlur={() => formik.setFieldTouched('confirm', true)}
        />
        {formik.touched.confirm && formik.errors.confirm ? (
          <span className="form-error">{formik.errors.confirm}</span>
        ) : null}
      </div>
      <div style={{ margin: '8px 0 24px 0', width: '100%' }}></div>
      <div style={{ width: '100%' }}>
        <Button
          loading={loading}
          onClick={() => !loading && formik.submitForm()}
        >
          ثبت نام
        </Button>
      </div>
      <div style={{ marginTop: 8, width: '100%' }}>
        <ActionLink href="/auth/login">
          حساب کاربری دارید؟ <strong>ورود به حساب کاربری</strong>
        </ActionLink>
      </div>
    </FormContainer>
  )
}

export default Signup
