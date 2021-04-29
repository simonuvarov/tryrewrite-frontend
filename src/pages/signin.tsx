import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import { signin } from '../services/auth.service';

interface SigninFormProps {
  redirectTo: string;
}

interface FormProps {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const validate = (values: FormProps) => {
  const errors: FormErrors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length <= 6) {
    errors.password = 'Password should be at least 6 characters';
  }

  return errors;
};

const SigninForm = (props: SigninFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      signin(values)
        .then(() => router.push(props.redirectTo))
        .catch(e => alert(e.response.data.message));
    }
  });

  const router = useRouter();

  return (
    <form
      className="flex flex-col"
      action="#"
      method="POST"
      onSubmit={formik.handleSubmit}
    >
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
      <FormButton className="mt-8">Sign in</FormButton>
    </form>
  );
};

function Signup() {
  return (
    <div className="flex bg-gray-50 min-h-screen flex-col justify-center">
      <div className="bg-white px-20 py-16 rounded-xl mx-auto shadow-md border border-gray-100 w-full max-w-xl">
        <div className="w-auto">
          <h2 className="text-left text-2xl font-semibold text-gray-700">
            Sign in to your account
          </h2>
        </div>
        <div className="w-full flex flex-col mx-auto max-w-md mt-8">
          <SigninForm redirectTo="/dashboard" />
        </div>
        <div className="mt-6 text-sm ">
          <span className="text-gray-500 ">Don't have an account?</span>
          <Link href="/signup">
            <a className="ml-2 font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
