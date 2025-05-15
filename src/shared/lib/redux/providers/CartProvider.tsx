'use client';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hydrateCart } from '../slices/cartSlice';
import { RootState } from '../store';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = localStorage.getItem('cart_shablon');
    if (cartData) {
      dispatch(hydrateCart(JSON.parse(cartData)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart_shablon', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'cart_shablon' && event.newValue) {
        const parsed = JSON.parse(event.newValue);
        dispatch(hydrateCart(parsed));
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, [dispatch]);

  return children;
};
