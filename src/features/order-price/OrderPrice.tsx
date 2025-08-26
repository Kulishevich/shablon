import { Button } from '@/shared/ui/button';
import React from 'react';
import s from './OrderPrice.module.scss';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { useFormContext } from 'react-hook-form';

export const OrderPrice = ({ priceWithOutDiscount }: { priceWithOutDiscount: number }) => {
  const { control, watch } = useFormContext();

  const deliveryCost = watch('delivery_cost');

  return (
    <div className={s.container}>
      <div className={s.price}>
        <div className={s.elem}>
          <p className="body_7">Стоимость товаров</p>
          <h5 className="h5">{priceWithOutDiscount.toFixed(2)} BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Стоимость доставки</p>
          <h5 className="h5">{deliveryCost} BYN</h5>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">{(priceWithOutDiscount + deliveryCost).toFixed(2)} BYN</h3>
      </div>
      <ControlledCheckbox
        control={control}
        name="checked"
        label="Согласие на обработку персональных данных"
      />
      <Button type="submit" className={s.button}>
        Оформить заказ
      </Button>
    </div>
  );
};
