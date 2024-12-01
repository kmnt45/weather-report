import { createSlice } from '@reduxjs/toolkit';

import { initialApiState } from '@/constants';
import { LoadingStage } from '@/enum';
import { ApiStatusState, ThemeType } from '@/models';
import { IWeather } from '@/models';
import { getCity } from '@/service';

export interface InitialState {
  weather: ApiStatusState<IWeather[]>;
  theme: ThemeType;
}

const initialState: InitialState = {
  weather: {
    ...initialApiState,
    apiData: [],
  },
  theme: 'light',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCity.pending, (state) => {
        state.weather.apiData = [];
        state.weather.apiError = null;
        state.weather.apiStatus = LoadingStage.LOADING;
      })
      .addCase(getCity.fulfilled, (state, { payload }) => {
        state.weather.apiData = payload;
        state.weather.apiStatus = LoadingStage.LOAD;
      })
      .addCase(getCity.rejected, (state, { payload }) => {
        state.weather.apiStatus = LoadingStage.LOAD;
        state.weather.apiError = payload || null;
      });
  },
});

export const { toggleTheme } = weatherSlice.actions;
export default weatherSlice.reducer;
