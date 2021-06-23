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

export default { signin, signup };
