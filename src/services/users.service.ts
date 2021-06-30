import axios from 'axios';

interface Credentials {
  email: string;
  password: string;
}

export interface UserInformation {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const me = (): Promise<UserInformation> => {
  return new Promise((resolve, reject) =>
    axios
      .get<UserInformation>('/api/users/me')
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  );
};

export default { me };
