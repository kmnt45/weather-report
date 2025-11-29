import axios from 'axios';

import { BASE_URL } from '@/constants';

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  throw new Error('Api key is not defined');
}

export const configuredAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});
