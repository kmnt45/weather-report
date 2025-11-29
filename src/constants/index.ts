import { ApiStatusState } from '@/models';

export const BASE_URL = 'https://api.openweathermap.org';

export const initialApiState: ApiStatusState<null> = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};
