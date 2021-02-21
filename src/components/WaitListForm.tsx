import axios from 'axios';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';

const WaitListForm = () => {
  const [success, setSuccess] = useState<boolean>();
  const isError = success === false;
  const isSuccess = success === true;

  const [email, setEmail] = useInput('');

  const addToWaitList = (email: string) => {
    axios
      .post('/api/waitlist', { email })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      });
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br bg-indigo-600 py-14 px-32 rounded-2xl shadow-xl">
      <div>
        <h2 className="text-indigo-50 text-3xl font-bold text-center">
          Get notified when we’re launching
        </h2>
        <p className="text-indigo-200 mt-2 text-center">
          There’s some work left to do. If you want to get a notification when
          we go live, add your email below.
        </p>
      </div>
      <form
        className="flex w-full mt-8 justify-between"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          onChange={e => setEmail(e)}
          placeholder="Enter email address"
          className="flex outline-none bg-gray-100 text-gray-700 placeholder-gray-400 flex-grow rounded px-6 py-3 shadow"
        />
        <button
          onClick={() => addToWaitList(email)}
          className="flex bg-indigo-500 focus:outline-none hover:bg-indigo-400 font-semibold py-3 px-8 rounded text-indigo-50 ml-2 shadow"
        >
          Notify me
        </button>
      </form>

      {isError && (
        <p className="flex text-sm w-full text-left text-yellow-500 mt-2 pl-1 text-shadow">
          Hmm, couldn’t add you to the newsletter - ping us directly at
          team@wriby.com and we'll add you to this list.
        </p>
      )}
      {isSuccess && (
        <p className="flex text-sm w-full text-left text-indigo-50 mt-2 pl-1">
          Awesome! We'll send you an email once we are live 🎉
        </p>
      )}
    </div>
  );
};

export default WaitListForm;
