import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import { signup } from '../services/auth.service';

interface SignupFormProps {
  redirectTo: string;
}

const SignupForm = (props: SignupFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      signup(values)
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
      <FormButton className="mt-8">Sign up</FormButton>
    </form>
  );
};

function Signup() {
  return (
    <div className="flex bg-gray-50 min-h-screen flex-col justify-center">
      <div className="bg-white px-20 py-16 rounded-xl mx-auto shadow-md border border-gray-100 w-full max-w-xl">
        <div className="w-auto">
          <h2 className="text-left text-2xl font-semibold text-gray-700">
            Create your Rewrite account
          </h2>
        </div>
        <div className="w-full flex flex-col mx-auto max-w-md mt-8">
          <SignupForm redirectTo="/dashboard" />
        </div>
        <div className="mt-6 text-sm ">
          <span className="text-gray-500 ">Have an account?</span>
          <Link href="/signin">
            <a className="ml-2 font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
