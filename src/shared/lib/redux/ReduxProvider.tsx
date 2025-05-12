'use client';
import { ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { CartProvider } from './CartProvider';

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CartProvider>{children}</CartProvider>
    </Provider>
  );
};
