import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import s from './CartPrice.module.scss';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

import { CartProduct } from '@/shared/lib/redux/slices/cartSlice';

export type CartPriceProps = {
  productsCart: CartProduct[];
  priceWithOutDiscount: number;
};

export const CartPrice = ({ productsCart, priceWithOutDiscount }: CartPriceProps) => {
  return (
    <div className={s.container}>
      <div className={s.price}>
        <div className={s.elem}>
          <p className="body_7">Стоимость товаров</p>
          <p className="h6">{priceWithOutDiscount.toFixed(2)} BYN</p>
        </div>
        <div className={s.elem}>
          <p className="body_7">Стоимость доставки</p>
          <p className="h6">При оформлении</p>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">{priceWithOutDiscount.toFixed(2)} BYN</h3>
      </div>
      {productsCart.length ? (
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
