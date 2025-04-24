import React from 'react';
import s from './CartSection.module.scss';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import { CartTable } from '@/features/cart-table';
import { CartPrice } from '@/features/cart-price';

export const CartSection = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1 className="h1">Корзина</h1>
        <Button variant="link" as="button">
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
