import axios from 'axios';
import { Profile } from './profile';

export interface Credentials {
  email: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
}

export const signup = (credentials: Credentials): Promise<Profile> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Profile>('/api/auth/signup', credentials)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export const signin = (credentials: Credentials): Promise<Profile> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Profile>('/api/auth/signin', credentials)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export const signout = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .post<void>('/api/auth/signout')
      .then(_ => {
        resolve(undefined);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export const verifyEmail = (token: string): Promise<Profile> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Profile>(`/api/auth/verify/${token}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export default { signin, signup, signout, verifyEmail };
