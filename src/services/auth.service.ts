import axios from 'axios';
import { getAccessTokenFromStorage } from '../lib/getAccessTokenFromStorage';
import { setAccessTokenToStorage } from '../lib/setAccessTokenToStorage';

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
        setAccessTokenToStorage(r.data.accessToken);
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
        setAccessTokenToStorage(r.data.accessToken);
        resolve(r.data);
      })
      .catch(r => reject(r));
  });
};

export const isValidSession = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const accessToken = getAccessTokenFromStorage();
    if (!accessToken) return resolve(false);

    axios
      .get('/api/auth/session', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
};
