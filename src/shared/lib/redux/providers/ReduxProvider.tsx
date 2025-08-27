'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { CartProvider } from './CartProvider';
import { ProfileProvider } from './ProfileProvider';
import { store } from '../store';

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ProfileProvider>
        <CartProvider>{children}</CartProvider>
      </ProfileProvider>
    </Provider>
  );
};
