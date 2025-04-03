import React from 'react';
import s from './CartSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import { RowProductCart } from '@/entities/row-product-cart';
import { CartTable } from '@/entities/cart-table';
import { CartPrice } from '@/entities/cart-price';

export const CartSection = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          Корзина
        </Typography>
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
