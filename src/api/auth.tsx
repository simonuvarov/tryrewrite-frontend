import axios from 'axios';
import { setAccessTokenToStorage } from '../lib/setAccessTokenToStorage';

interface SigninApiResponse {
  accessToken: string;
}

interface SigninCredentials {
  email: string;
  password: string;
}

export const auth = () => {
  const signin = (props: SigninCredentials) => {
    axios
      .post<SigninApiResponse>('http://localhost:4000/signin', props)
      .then(r => setAccessTokenToStorage(r.data.accessToken))
      .catch(console.log);
  };

  return { signin };
};
