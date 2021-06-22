import axios from 'axios';

export interface Credentials {
  email: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
}

export const signup = (credentials: Credentials): Promise<Tokens> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signup', credentials)
      .then(r => {
        resolve(r.data);
      })
      .catch(r => reject(r));
  });
};

export const signin = (credentials: Credentials): Promise<Tokens> => {
  return new Promise((resolve, reject) => {
    axios
      .post<Tokens>('/api/auth/signin', credentials)
      .then(r => {
        resolve(r.data);
      })
      .catch(r => reject(r));
  });
};

export const isValidSession = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/auth/session')
      .then(_ => resolve())
      .catch(e => {
        // Consider only server side error worth rejecting
        // Otherwise, "cancelation" of the request is considered error
        // and user gets signed out
        if (e.response) reject(e);
        resolve();
      });
  });
};
