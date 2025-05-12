'use client';
import { ProductT } from '@/shared/api/product/types';
import { addInCart } from '@/shared/lib/redux/slices/cartSlice';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import React from 'react';
import { useDispatch } from 'react-redux';

export const ProductButton = ({ product }: { product: ProductT }) => {
  const dispatch = useDispatch();

  const handleAddInCard = () => {
    dispatch(addInCart({ ...product, quantity: 1 }));
    showToast({ title: 'Добавлено в корзину', variant: 'success' });
  };

  return <Button onClick={handleAddInCard}>В корзину</Button>;
};
