import React from 'react';
import s from './CartPrice.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { useSelector } from 'react-redux';
import {
  selectCartPriceWithDiscount,
  selectCartPriceWithOutDiscount,
} from '@/shared/lib/redux/selectors/CartSelectors';
import { RootState } from '@/shared/lib/redux/store';

export const CartPrice = () => {
  const productsCard = useSelector((state: RootState) => state.cart.items);

  const priceWithOutDiscount = useSelector(selectCartPriceWithOutDiscount);

  const priceWithDiscount = useSelector(selectCartPriceWithDiscount);

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
          <h5 className="h5">При оформлении</h5>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">{priceWithDiscount} BYN</h3>
      </div>
      {productsCard.length ? (
        <Button as={Link} href={`${paths.cart}${paths.order}`} className={s.button}>
          К оформлению
        </Button>
      ) : (
        <Button className={s.button} disabled>
          К оформлению
        </Button>
      )}
    </div>
  );
};
