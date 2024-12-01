import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IGeocoding, IWeather } from '@/models';
import { ErrorMessageType } from '@/models';
import { configuredAxios } from '@/utils/axios.utils.ts';
import { HandleError } from '@/utils/handleError.ts';

export const getCity = createAsyncThunk<IWeather[], string, { rejectValue: ErrorMessageType }>(
  'weather/getCities',
  async (city, { rejectWithValue }) => {
    try {
      const { data: geocodingData } = await configuredAxios.get<IGeocoding[]>('/geo/1.0/direct', {
        params: { q: city, limit: 1 },
      });

      if (geocodingData.length === 0) {
        return rejectWithValue({
          status: 404,
          message: 'Такого города нет : (',
        });
      }

      const weatherData: IWeather[] = await Promise.all(
        geocodingData.map(async ({ lat, lon }) => {
          const { data } = await configuredAxios.get<IWeather>('/data/2.5/weather', {
            params: { lat, lon },
          });
          return data;
        }),
      );

      return weatherData;
    } catch (error) {
      const errorObject = HandleError(error as AxiosError<ErrorMessageType>);
      return rejectWithValue(errorObject);
    }
  },
);
