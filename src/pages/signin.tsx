import { useInput } from '../hooks/useInput';
import { signin } from '../services/auth.service';

const SigninForm = () => {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <form
      className="flex flex-col mt-6 mx-1 space-y-6 max-w-sm"
      action="#"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        signin({
          email,
          password
        }).then(r => alert(r.accessToken));
      }}
    >
      <input
        placeholder="Email"
        className="px-4 py-2 border border-gray-200 rounded text-sm font-medium"
        value={email}
        onChange={setEmail}
      />
      <input
        placeholder="Password"
        className="px-4 py-2 border border-gray-200 rounded text-sm font-medium"
        type="password"
        value={password}
        onChange={setPassword}
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
