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
      .catch(err => reject(err));
  });
};

export const signin = (credentials: Credentials): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signin', credentials)
      .then(_ => {
        resolve(undefined);
      })
      .catch(err => reject(err));
  });
};

export const signout = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signout')
      .then(_ => {
        resolve(undefined);
      })
      .catch(err => reject(err));
  });
};

export default { signin, signup, signout };
