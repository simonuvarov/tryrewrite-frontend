import { useFormik } from 'formik'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { FormButton } from '../components/FormButton'
import { FormInput } from '../components/FormInput'
import useAuth from '../hooks/useAuth'

interface SigninFormProps {
  redirectTo: string
}

interface FormProps {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const validate = (values: FormProps) => {
  const errors: FormErrors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length <= 6) {
    errors.password = 'Password should be at least 6 characters'
  }

  return errors
}

const SigninForm = (props: SigninFormProps) => {
  const { signin, error, user, loading } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: (values) => {
      signin(values)
    }
  })

  useEffect(() => {
    if (error) alert(error)
  }, [error])

  return (
    <form
      className="flex flex-col"
      action="#"
      method="POST"
      onSubmit={formik.handleSubmit}>
      <div className="space-y-6">
        <FormInput
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <FormInput
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
          type="password"
        />
      </div>
      <FormButton className="mt-8" isLoading={loading}>
        Sign in
      </FormButton>
    </form>
  )
}

function Signup() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push('/dashboard')
  }, [user])

  // prevent form blinking
  if (user) return null

  return (
    <>
      <NextSeo title="Sign in to your Rewrite account" />
      <div className="flex min-h-screen flex-col justify-center bg-gray-50">
        <div className="mx-auto w-full max-w-xl rounded-xl border border-gray-200 bg-white px-20 py-16 shadow-md">
          <div className="w-auto">
            <h2 className="text-left text-2xl font-semibold text-gray-700">
              Sign in to your account
            </h2>
          </div>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col">
            <SigninForm redirectTo="/dashboard" />
          </div>
          <div className="mt-6 text-sm ">
            <span className="text-gray-500 ">Don't have an account?</span>
            <Link
              href="/signup"
              className="ml-2 font-medium text-blue-600 transition-colors hover:text-blue-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
