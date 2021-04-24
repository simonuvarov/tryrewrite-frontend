import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { useInput } from '../hooks/useInput';
import { signin } from '../services/auth.service';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';

interface SigninFormProps {
  redirectTo: string;
}

const SigninForm = (props: SigninFormProps) => {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  const router = useRouter();

  return (
    <form
      className="flex flex-col"
      action="#"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        signin({
          email,
          password
        }).then(() => router.push(props.redirectTo));
      }}
    >
      <div className="space-y-6">
        <FormInput label="Email" value={email} setValue={setEmail} autofocus />
        <FormInput
          label="Password"
          value={password}
          setValue={setPassword}
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
      <div className="bg-white px-20 py-16 rounded-lg mx-auto shadow-md border border-gray-100 w-full max-w-xl">
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
