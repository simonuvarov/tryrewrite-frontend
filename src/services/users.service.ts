import axios from 'axios';

interface Credentials {
  email: string;
  password: string;
}

interface UserInformation {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const me = () => {
  return axios.get<UserInformation>('/api/users/me');
};

export default { me };
