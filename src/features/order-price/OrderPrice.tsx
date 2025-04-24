import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
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
          <p className="body_7">Стоимость товаров без скидки</p>
          <h5 className="h5">480 BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Скидка</p>
          <h5 className="h5">40 BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Стоимость доставки</p>
          <h5 className="h5">30 BYN</h5>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">470 BYN</h3>
      </div>
      <Checkbox label="Согласие на обработку персональных данных" />
      <Button className={s.button}>Оформить заказ</Button>
    </div>
  );
};
