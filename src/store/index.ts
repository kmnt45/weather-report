import { configureStore } from '@reduxjs/toolkit';

import { weatherReducer } from '@/slices';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
