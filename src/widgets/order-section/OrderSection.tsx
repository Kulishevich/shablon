import { Typography } from '@/shared/ui/typography';
import React from 'react';
import s from './OrderSection.module.scss';
import { OrderPrice } from '@/features/order-price/OrderPrice';
import { OrderForm } from '@/features/ordre-form';

export const OrderSection = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Оформление заказа
      </Typography>
      <div className={s.content}>
        <OrderForm />
        <OrderPrice />
      </div>
    </div>
  );
};
