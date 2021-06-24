import axios from 'axios';

export interface Credentials {
  email: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
}

export const signup = (credentials: Credentials): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signup', credentials)
      .then(_ => {
        resolve(undefined);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export const signin = (credentials: Credentials): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signin', credentials)
      .then(_ => {
        resolve(undefined);
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
      .post<Tokens>('/api/auth/signout')
      .then(_ => {
        resolve(undefined);
      })
      .catch(err => {
        if (err.response) reject(new Error(err.response.data.message));
        else reject(new Error('Unexpected client side error'));
      });
  });
};

export default { signin, signup, signout };
