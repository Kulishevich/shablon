import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import profileSlice from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
