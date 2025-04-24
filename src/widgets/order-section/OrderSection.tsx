import React from 'react';
import { OrderForm } from '@/features/ordre-form';
import { OrderPrice } from '@/features/order-price';
import s from './OrderSection.module.scss';

export const OrderSection = () => {
  return (
    <div className={s.container}>
      <h1 className="h1">Оформление заказа</h1>
      <div className={s.content}>
        <OrderForm />
        <OrderPrice />
      </div>
    </div>
  );
};
