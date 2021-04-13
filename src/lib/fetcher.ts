import axios from 'axios';
import { getAccessTokenFromStorage } from './getAccessTokenFromStorage';

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${getAccessTokenFromStorage()}` }
    })
    .then(res => res.data);
