import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import React from 'react';
import s from './OrderPrice.module.scss';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import {
  selectCartPriceWithDiscount,
  selectCartPriceWithOutDiscount,
} from '@/shared/lib/redux/selectors/CartSelectors';

export const OrderPrice = () => {
  const { control, watch } = useFormContext();

  const priceWithOutDiscount = useSelector(selectCartPriceWithOutDiscount);
  const priceWithDiscount = useSelector(selectCartPriceWithDiscount);

  const deliveryCost = watch('delivery_cost');

  return (
    <div className={s.container}>
      <div className={s.promocode}>
        <TextField className={s.input} placeholder="Промокод" />
        <Button variant="secondary">Применить</Button>
      </div>
      <div className={s.price}>
        <div className={s.elem}>
          <p className="body_7">Стоимость товаров без скидки</p>
          <h5 className="h5">{priceWithOutDiscount} BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Скидка</p>
          <h5 className="h5">{priceWithOutDiscount - priceWithDiscount} BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Стоимость доставки</p>
          <h5 className="h5">{deliveryCost} BYN</h5>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">{priceWithDiscount + deliveryCost} BYN</h3>
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
