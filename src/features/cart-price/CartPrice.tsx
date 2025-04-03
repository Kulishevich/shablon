import React from 'react';
import s from './CartPrice.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

export const CartPrice = () => {
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
          <Typography variant="h5">При оформлении</Typography>
        </div>
      </div>
      <div className={s.elem}>
        <Typography variant="h5">Итого</Typography>
        <Typography variant="h3">440 BYN</Typography>
      </div>
      <Button as={Link} href={paths.order} className={s.button}>
        К оформлению
      </Button>
    </div>
  );
};
