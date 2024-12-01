import { ApiStatusState } from '@/models';

export const BASE_URL = 'https://api.openweathermap.org';

export const API_KEY = '7ef8d5793c1cc08f82f1a854934d27aa';

export const initialApiState: ApiStatusState<null> = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};
