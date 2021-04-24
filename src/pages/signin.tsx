import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { OnChange, useInput } from '../hooks/useInput';
import { signin } from '../services/auth.service';

interface FormButtonProps {
  className?: string;
  children: React.ReactNode;
}

const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-base leading-8 font-medium transition ${
        props.className || ''
      }`}
    >
      {props.children}
    </button>
  );
};

interface FormInputProps {
  label: string;
  value: string;
  setValue: OnChange;
  autofocus?: boolean;
  type?: 'text' | 'email' | 'password';
  spellcheck?: boolean;
}

const FormInput = (props: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={props.label.toLowerCase()}
        className="block text-sm text-gray-600 font-medium"
      >
        {props.label}
      </label>
      <input
        id={props.label.toLowerCase()}
        className="block w-full px-4 py-2 border border-gray-200 rounded text-base leading-8 text-gray-700 outline-none focus:outline-none focus:ring transition-shadows transition mt-2"
        value={props.value}
        onChange={props.setValue}
        autoFocus={props.autofocus || false}
        type={props.type || 'text'}
        spellCheck={props.spellcheck || false}
      />
    </div>
  );
};

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
