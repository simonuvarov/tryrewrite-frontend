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

const SigninForm = (props: SigninFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
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
          autofocus
        />
        <FormInput
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
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
