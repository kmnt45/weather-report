import axios from 'axios';

import { API_KEY, BASE_URL } from '@/constants';

export const configuredAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});
