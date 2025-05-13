'use client';
import React, { useEffect, useState } from 'react';
import s from './CartSection.module.scss';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import { CartTable } from '@/features/cart-table';
import { CartPrice } from '@/features/cart-price';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/shared/lib/redux/slices/cartSlice';
import { Loader } from '@/shared/ui/loader';

export const CartSection = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 11500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1 className="h1">Корзина</h1>
        <Button variant="link" as="button" onClick={() => dispatch(clearCart())}>
          Очистить корзину
          <ArrowRightUpIcon />
        </Button>
      </div>
      <div className={s.content}>
        <CartTable />
        <CartPrice />
      </div>
    </div>
  );
};
