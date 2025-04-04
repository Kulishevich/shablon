import React from 'react';
import s from './CartButton.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';
import { Typography } from '@/shared/ui/typography';

export const CartButton = () => {
  return (
    <Link className={s.buttonCart} href={paths.cart}>
      <Button variant="icon_secondary" as="span">
        <ShoppingCartIcon width={32} height={32} />
      </Button>
      <div className={s.content}>
        <Typography variant="body_4">Корзина</Typography>
        <Typography variant="body_7" as="span">
          0 товаров(0 BYN)
        </Typography>
      </div>
    </Link>
  );
};
