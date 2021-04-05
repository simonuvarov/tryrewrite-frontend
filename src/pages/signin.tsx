import { auth } from '../api/auth';

const SigninForm = () => {
  const { signin } = auth();
  return (
    <form
      className="flex flex-col mt-6 mx-1 space-y-6 max-w-sm"
      action="#"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        signin({
          email: 'simon@rewrite.com',
          password: 'password'
        });
      }}
    >
      <input
        placeholder="Email"
        className="px-4 py-2 border border-gray-200 rounded text-sm font-medium"
      />
      <input
        placeholder="Password"
        className="px-4 py-2 border border-gray-200 rounded text-sm font-medium"
        type="password"
      />

      <button className="px-4 py-2 bg-gray-900 text-gray-50 rounded text-sm font-medium">
        Sign in
      </button>
    </form>
  );
};

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center">
        <SigninForm />
      </div>
    </>
  );
}

export default Signup;
