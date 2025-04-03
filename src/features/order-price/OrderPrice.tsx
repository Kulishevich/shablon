import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import React from 'react';
import s from './OrderPrice.module.scss';
import { Checkbox } from '@/shared/ui/checkbox';

export const OrderPrice = () => {
  return (
    <div className={s.container}>
      <div className={s.promocode}>
        <TextField className={s.input} placeholder="Промокод" />
        <Button variant="secondary">Применить</Button>
      </div>
      <div className={s.price}>
        <div className={s.elem}>
          <Typography variant="body_7">Стоимость товаров без скидки</Typography>
          <Typography variant="h5">480 BYN</Typography>
        </div>
        <div className={s.elem}>
          <Typography variant="body_7">Скидка</Typography>
          <Typography variant="h5">40 BYN</Typography>
        </div>
        <div className={s.elem}>
          <Typography variant="body_7">Стоимость доставки</Typography>
          <Typography variant="h5">30 BYN</Typography>
        </div>
      </div>
      <div className={s.elem}>
        <Typography variant="h5">Итого</Typography>
        <Typography variant="h3">470 BYN</Typography>
      </div>
      <Checkbox label="Согласие на обработку персональных данных" />
      <Button className={s.button}>Оформить заказ</Button>
    </div>
  );
};
