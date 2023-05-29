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
  email: Yup.string()
    .email('لطفا یک ایمیل معتبر وارد نمایید')
    .required('این فیلد الزامی است'),
  password: Yup.string()
    .required('این فیلد الزامی است')
    .matches(
      /^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x]).*$/,
      'باید شامل عدد، یک کاراکتر بزرگ و یک حرف خاص مانند @#*!... باشد.',
    ),
})

const Login = () => {
  const { Login } = AuthService()

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const loginUser = (values) => {
    setLoading(true)
    Login(values)
      .then((result) => {
        setLoading(false)
        dispatch(authActions.login(result))
        toast.success('خوش آمدید!')
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginUser,
    validateOnChange: false,
  })

  return (
    <FormContainer>
      <Title>دوباره خوش آمدید!</Title>
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
          type={'password'}
          placeholder="رمزعبور"
          onChange={(e) => formik.setFieldValue('password', e.target.value)}
          onBlur={() => formik.setFieldTouched('password', true)}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="form-error">{formik.errors.password}</span>
        ) : null}
      </div>
      {/* <div style={{ margin: '8px 0 24px 0', width: '100%' }}>
        <ActionLink href="#">رمز عبور را فراموش کردید؟</ActionLink>
      </div> */}
      <div style={{ width: '100%' }}>
        <Button
          height={'56px'}
          loading={loading}
          onClick={() => formik.submitForm()}
        >
          ورود
        </Button>
      </div>
      <div style={{ marginTop: 8, width: '100%' }}>
        <ActionLink href="/auth/signup">
          ثبت نام نکردید؟ <strong>ثبت نام</strong>
        </ActionLink>
      </div>
    </FormContainer>
  )
}

export default Login
