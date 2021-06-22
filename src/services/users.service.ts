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

const me = () => {
  return axios.post<UserInformation>(`${API_URL}${'/users/me'}`, {
    withCredentials: true
  });
};

export default { me };
