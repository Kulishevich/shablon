'use client';
import React from 'react';
import s from './CartButton.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';
import { useSelector } from 'react-redux';
import {
  selectCartCountProducts,
  selectCartPriceWithDiscount,
} from '@/shared/lib/redux/selectors/CartSelectors';

const getProductWord = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'товаров';
  }

  if (lastDigit === 1) {
    return 'товар';
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'товара';
  }

  return 'товаров';
};

export const CartButton = () => {
  const productsQuantity = useSelector(selectCartCountProducts);

  const priceWithDiscount = useSelector(selectCartPriceWithDiscount);

  return (
    <Link className={s.buttonCart} href={paths.cart}>
      <Button variant="icon_secondary" as="div" className={s.button}>
        <ShoppingCartIcon width={32} height={32} />
      </Button>
      <div className={s.content}>
        <p className="body_4">Корзина</p>
        <span className="body_7">
          {productsQuantity} {getProductWord(productsQuantity)} ({priceWithDiscount} BYN)
        </span>
      </div>
    </Link>
  );
};
