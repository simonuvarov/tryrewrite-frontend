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

const me = (credentials: Credentials) => {
  return axios.post<UserInformation>(`${API_URL}${'/users/me'}`, credentials);
};

export default { me };
