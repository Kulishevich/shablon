import React from 'react';
import s from './CartButton.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';

export const CartButton = () => {
  return (
    <Link className={s.buttonCart} href={paths.cart}>
      <Button variant="icon_secondary" as="div" className={s.button}>
        <ShoppingCartIcon width={32} height={32} />
      </Button>
      <div className={s.content}>
        <p className="body_4">Корзина</p>
        <span className="body_7">0 товаров(0 BYN)</span>
      </div>
    </Link>
  );
};
