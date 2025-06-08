import { configureStore } from '@reduxjs/toolkit';
import MainSlice from './mainSlice';

export const store = configureStore({
  reducer: {
    MainSlice: MainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
